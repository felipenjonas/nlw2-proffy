import { Request, Response } from 'express';
import db from '../database/connection';


export default class ConnectionsController {
    async index(req: Request, res: Response) {
        const totalConnections = await db('connections').count('* as total');

        // No Knex, ele sempre retorn um array, então quando quero apenas 1 retorno, preciso pega a pimeira posição do array
        const { total } = totalConnections[0];

        return res.json({ total });
    }
    
    async create(req: Request, res: Response) {
        const { user_id } = req.body

        await db('connections').insert({
            user_id,
        })

        return res.status(201).send();
    }


}