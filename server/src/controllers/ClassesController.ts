import { Request, Response } from 'express';

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMinutes';


interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController {

    async index(req: Request, res: Response) {
        // Criar os 3 filtros da aplicação
        const filters = req.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string; 


        if (!filters.week_day || !filters.subject || !filters.time) {
            return res.status(400).json({
                error:'Missing filters to search classes'
            })
        }

        // Converter o time passado no req.query usando a função criada
        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db('classes')
            // Ver se tem horário dísponivel, por meio da query solicitada
            .whereExists(function() {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    // Usar crase dentro das aspas, para referenciar uma tabela e uma coluna
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    // Valdiar o horário de trabalho: quero aula as 10, entao precisa listar hrarios menores ou iguais as 10 horas
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    // Filtrar até o término do horário de aula
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])            
            })

            .where('classes.subject', '=',subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return res.json(classes);





    }


    async create(req: Request, res: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

        // CRIANDO TRANSACTIONS
        const trx = await db.transaction();

        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            })

            const user_id = insertedUsersIds[0];

            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id
            })

            const class_id = insertedClassesIds[0];

            // Converter os horários em string para minutos (8 horas X 60min - integer 480)
            // Pegar cada atributo dentro de cada objeto do schedulo.
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                };
            })

            // Após tratar o formatos das horas, inserir no banco
            await trx('class_schedule').insert(classSchedule);

            // Somente aqui, irá inserir no banco todas as operações
            await trx.commit();

            return res.status(201).send();
        } catch (err) {

            // Se erro, ira desfazer
            await trx.rollback();

            console.log(err)
            return res.status(400).json({
                error: "Unexpected error while creating new class"
            })
        }
    }
}