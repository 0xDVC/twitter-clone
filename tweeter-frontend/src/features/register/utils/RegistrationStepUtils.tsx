import { ReactElement } from "react";
import { ArrowBack, ClearRounded } from "@mui/icons-material";

export const displayIcon = (step: number): ReactElement => {
    switch(step) {
        case 1:
            return <ClearRounded sx={{fontSize: 25}} />;
        case 2:
            return <ArrowBack sx={{fontSize: 25}} />
        case 3:
            return <ArrowBack sx={{fontSize: 25}} />
        case 5:
            return <ArrowBack sx={{fontSize: 25}} />
        case 4:
            return <></>
        case 6:
            return <></>
        default:
            return <></>
    }
}

export const iconClass = (step: number): string => {
    return (step === 4 || step === 6) ? "mr-[40px] z-20 h-[40px] w-[40px]" : "flex justify-center items-center mr-[40px] z-20 h-[40px] w-[40px] hover:rounded-full hover:bg-[rgba(0,0,0,0.1)] hover:cursor-pointer ";
}