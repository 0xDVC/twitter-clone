import React, { useState, useEffect } from "react";

interface TestInputProps {
    name: string;
    label: string;
    errorMessage: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    maxLength?: number;
    validator?(value: string): boolean;
}

 export const TextInput: React.FC<TestInputProps> = ({ name, label, errorMessage, maxLength, onChange, validator }: TestInputProps) => {
    const [ inputValue, setInputValue ] = useState<string>("");

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        setInputValue(e.target.value);
    }
    return (
        <div>
            <span>{label}</span>
            <input name={name} onChange={updateInput} />
        </div>
    );
}