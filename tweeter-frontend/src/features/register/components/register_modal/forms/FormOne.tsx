import { useState, useEffect } from "react";
import {ValidatedInput} from "../../../../../components/validateInput/ValidatedInput.tsx";
import {validateName} from "../../../../../services/Validators.ts";
import {RegisterDateInput} from "../../../../../components/validateInput/RegisterDateInput.tsx";

interface FormOneProps {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
}
export const FormOne = () => {
    const [ stepState, setSetState ] = useState<FormOneProps>({
            firstName: "",
            lastName: "",
            email: "",
            dateOfBirth: ""

    });

    useEffect(() => {
        console.log("State changed: ", stepState );
    }, [stepState]);

    const updateUser = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSetState({...stepState, [e.target.value]: e.target.value })
    }

    return (
        <div className="w-[85%]">
            <div>
                <ValidatedInput name="firstName"
                                label="First"
                                errorMessage="What's your name?"
                                validator={validateName}
                                changeValue={updateUser}
                                />

                <ValidatedInput name="lastName"
                                label="Last"
                                errorMessage="What's your name?"
                                validator={validateName}
                                changeValue={updateUser}
                />

                <ValidatedInput name="email"
                                label="Email"
                                errorMessage="Please enter a valid email"
                                validator={validateName}
                                changeValue={updateUser}
                />
                <RegisterDateInput />
            </div>
        </div>
    );
}