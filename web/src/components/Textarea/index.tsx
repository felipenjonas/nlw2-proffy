import React, { TextareaHTMLAttributes } from 'react';
import './style.css'

// TextareaHTMLAttributes = permite usar todas as propriedades permtidos no html pra usar no Textarea

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

// Para usar todas as propriedades, usar "...rest" que significa passar tudo para uma "Var" chamada "rest"

const Textarea: React.FunctionComponent<TextareaProps> = ({label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea  id={name} {...rest} />
        </div>
    );
}

export default Textarea