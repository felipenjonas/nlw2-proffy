import React, { InputHTMLAttributes } from 'react';
import './style.css'

// InputHTMLAttributes = permite usar todas as propriedades permtidos no html pra usar no input

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

// Para usar todas as propriedades, usar "...rest" que significa passar tudo para uma "Var" chamada "rest"

const Input: React.FunctionComponent<InputProps> = ({label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input