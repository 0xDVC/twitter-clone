export const validateName = (value: string): boolean => {
    return value !== '';
}

export const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}