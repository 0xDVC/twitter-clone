import {ReactElement} from "react";

const MONTHS: string[] = [
    '', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

export const getMonths = () => {
    return MONTHS.map((month, index) => {
        if(index === 0) {
            return <option value={index} key={month}></option>
        } else {
            return <option value={index} key={month}>{month}</option>
        }
    });
}

export const getDays = () => {
    let days: ReactElement[] = [];

    for(let i = 1; i <= 31; i++) {
        if (i === 0) {
            days.push(<option value={0} key={i}></option>);
        } else {
            days.push(<option value={i} key={i}>{i}</option>)
        }
    }
    return days;
}

export const getYears = () => {
    let years: ReactElement[] = [];
    const currentYear = new Date().getFullYear(); // Get the current year

    for(let i = currentYear; i >= 1900; i--) {
        if(i === currentYear) {
            years.push(<option value={0} key={i}></option>);
        } else {
            years.push(<option value={i} key={i}>{i}</option>);
        }
    }
    return years;
}