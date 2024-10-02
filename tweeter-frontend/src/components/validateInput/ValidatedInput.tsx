import React, {useState, useEffect, ChangeEvent} from "react";
import {StyledInputBox, StyledInputField, StyledInputLabel} from "./StyledInput.tsx";
import { ValidatedInputState} from "../../utils/GlobalInterfaces.ts";
import {determineValidatedStyles} from "../../utils/DetermineStylesUtils.ts";


interface ValidatedInputProps {
    name: string;
    label: string;
    errorMessage: string;
    validator(value: string): boolean;
    changeValue(e: React.ChangeEvent<HTMLInputElement>): void;
    attributes?: Record<string, string | boolean | number>
}

export const ValidatedInput: React.FC<ValidatedInputProps> = ({
    name, label, errorMessage, validator, changeValue, attributes
                                                              })  => {

    const [  validatedState, setValidatedState ] = useState<ValidatedInputState>({
        active: false,
        valid: true,
        typedIn: false,
        labelActive: false,
        labelColor: 'grey'
    });

    useEffect(() => {
        setValidatedState(determineValidatedStyles(validatedState, validator));
    }, [validatedState.active, validatedState.valid, validatedState.typedIn, validatedState.value, validatedState.labelActive, validatedState.labelColor, validatedState, validator]);

    const focus = (e: React.FocusEvent<HTMLInputElement>): void => {
        setValidatedState({
            ...validatedState,
            active: !validatedState?.active
        });
    }

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValidatedState({
            ...validatedState,
            typedIn: true,
            value: e.target.value
        });

        changeValue(e);
    }


    return (
        <div className="h-fit w-[100%]">
            <StyledInputBox active={ validatedState.active } valid={ validatedState.valid }>
                <StyledInputLabel active={ validatedState.labelActive } valid={ validatedState.valid } color={ validatedState.labelColor }>{ label }</StyledInputLabel>
                <input className="absolute bottom-[5px] top-1 left-[10px] mt-4 w-[90%] font-[300] text-[20px] leading-[28px] z-50 border-none p-0 outline-none focus:outline-none focus:border-none bg-transparent"
                    onFocus={focus}
                    onBlur={focus}
                    onChange={updateValue}
                    {...attributes}
                />
            </StyledInputBox>
            { !validatedState.valid ? <span className="text-sm text-red-500">{ errorMessage }</span> : <> </> }
        </div>
    );
}