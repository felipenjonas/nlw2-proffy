import React, { SelectHTMLAttributes } from 'react';
import './style.css'

// SelectHTMLAttributes = permite usar todas as propriedades permtidos no html pra usar no Select

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value:string;
        label: string;
    }>;
}

// Para usar todas as propriedades, usar "...rest" que significa passar tudo para uma "Var" chamada "rest"

const Select: React.FunctionComponent<SelectProps> = ({label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue="" id={name} {...rest} >
                <option value="" disabled selected hidden >Selecione uma opção</option>
                { options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                }) }
            </select>
        </div>
    );
}

export default Select