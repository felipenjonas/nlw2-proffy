import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/48365582?s=460&u=4699412acb6474b6a3192764e094c4937307701a&v=4" alt="Felipe Jonas" />
                <div>
                    <strong>Felipe Jonas</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores fórmulas de física avançada
                <br /><br />
                Quisque scelerisque egestas euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris blandit feugiat urna at consectetur. Donec ut luctus dolor, a accumsan dolor. Etiam mollis dignissim magna. Cras erat dui, tincidunt nec enim ac, consequat rutrum lectus. Suspendisse et turpis risus. Integer tincidunt magna in est faucibus mollis. Etiam ultricies semper euismod.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;