import React from 'react';
import { FC, InputHTMLAttributes } from 'react';
type typeInput = "text" | "password" | "number";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: typeInput;
    placeholder?: string;
    value?: number | string;
}
const Input : FC<Props> = ({ placeholder = "Input Here", type = "text", value, ...props }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} value={value} {...props}  />
        </>
    )
};

export default Input;