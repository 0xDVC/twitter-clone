import React, {ReactElement, useEffect, useState} from "react";
import { StyledInputBox, StyledInputLabel} from "./StyledInput.tsx";
import { determineValidatedSelectStyles } from "../../utils/DetermineStylesUtils.ts";

interface ValidatedDateSelectorProps {
    style: string;
    valid: boolean;
    name: string;
    dropDown(): ReactElement | ReactElement[];
}

export const ValidatedDateSelector: React.FC<ValidatedDateSelectorProps> =({style, valid, name, dropDown }) => {
    const [ active, setActive ] = useState<boolean>(false);
    const [ value, setvalue ] = useState<number>(0);
    const [ color, setColor ] = useState<string>('grey')

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setvalue(+e.target.value);
    }

    const toggleActive = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setActive(!active);
    }

    useEffect(() => {
        setColor(determineValidatedSelectStyles(active, valid))
    }, [active, valid, value]);

    return (
    <div className={style}>
        <StyledInputBox active={active} valid={valid}>
            <StyledInputLabel color='grey' active={active} valid={valid}>
                {name}
            </StyledInputLabel>
            <select className="flex justify-between items-center"
                onFocus={toggleActive}
                    onBlur={toggleActive}
                    onChange={changeValue}
                    value={value}
             >
                    {dropDown()}
            </select>
        </StyledInputBox>
    </div>
  );
}