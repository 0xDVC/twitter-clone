import React from 'react';
import { displayIcon, iconClass } from "../../utils/RegistrationStepUtils.tsx";

interface RegisterStepProps {
    step: number;
    changeStep(): void;
}

export const RegistrationStepCounter: React.FC<RegisterStepProps> = ({step, changeStep}: RegisterStepProps) => {
    return (
        <div className="flex flex-row items-center p-[16px] w-full z-20">
            <div onClick={changeStep} className={iconClass(step)}>
                { displayIcon(step) }
            </div>
            <span className="m-0 p-0 font-medium text-[20px]">Step {step} of 6</span>
        </div>
    );
}