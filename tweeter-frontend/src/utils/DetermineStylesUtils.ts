import { StyledInputProps } from "./GlobalInterfaces";
import { ValidatedInputState } from "./GlobalInterfaces.ts";

export const determineStyledInputBorder = (props: StyledInputProps): string => {
    let { active, valid, theme } = props;

    if(!active && valid) {
        return `1px solid ${theme.colors.lightGrey}`;
    }

    if(!active && !valid) {
        return `1px solid ${theme.colors.error}`;
    }

    if(active && valid) {
        return `2px solid ${theme.colors.blue}`;
    }

    if(active && !valid) {
        return `2px solid ${theme.colors.error}`;
    }

    return ""
}

export const determineLabelColor = (props: StyledInputProps): string => {
    let { active, valid, theme, color } = props;

    if(color && color === 'error') {
        return theme.colors.error;
    }

    if(color && color === 'blue') {
        return theme.colors.blue;
    }


    return theme.colors.grey;
}

export const determineValidatedStyles = (state: ValidatedInputState, validator: (value: string) => boolean) => {
    let { valid, active, typedIn, value, labelColor, labelActive } = state;

    if(typedIn) {
        valid = validator(value);

        if(active && valid) {
            labelActive = true;
            labelColor = 'blue';
        }

        if(active && !valid) {
            labelActive = true;
            labelColor = 'error';
        }

        if(!active && valid) {
            labelActive = true;
            labelColor = 'grey';
        }

        if(!active && !valid) {
            labelActive = false;
            labelColor = 'grey';
        }
    } else {
        if(active) {
            labelActive = true;
            labelColor = 'blue'
        } else {
            labelActive = false;
            labelColor = 'grey'
        }
    }

    state = {
        ...state,
        valid,
        labelColor,
        labelActive
    };

    return state;
}

export const determineValidatedSelectStyles = (active: boolean, valid: boolean): string => {
    if (!valid) {
        return 'error'
    }

    if (active) {
        return 'blue'
    }

    return 'grey';
}