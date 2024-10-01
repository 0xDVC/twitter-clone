import { TextInput } from "../../../../../components/testInput/TextInput.tsx";
import { useState, useEffect } from "react";

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
        <div>
            <div>
                {/* First Name*/}
                <TextInput
                    name={"firstName"}
                    label={"First"}
                    errorMessage={"Please enter your name"}
                    onChange={updateUser}
                />

                {/* Last Name*/}
                <TextInput
                    name={"lastName"}
                    label={"Last"}
                    errorMessage={"Please enter your name"}
                    onChange={updateUser}
                />

                {/* Email */}
                <TextInput
                    name={"email"}
                    label={"Email"}
                    errorMessage={"Please enter your email"}
                    onChange={updateUser}
                />

            </div>
        </div>
    );
}