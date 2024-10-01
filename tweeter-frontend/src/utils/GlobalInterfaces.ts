interface ThemeColors {
    blue: string;
    black: string;
    grey: string;
    darkGrey: string;
    lightGrey: string;
    white: string;
    error: string;
}

export interface Theme {
    colors: ThemeColors
}

export interface StyledInputProps {
    active: boolean;
    valid: boolean;
    theme: Theme;
    color?: string;
}