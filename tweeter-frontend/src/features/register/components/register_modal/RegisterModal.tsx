import React, {useState} from "react";
import { Modal } from "../../../../components/modal/Modal.tsx";
import { RegistrationStepCounter } from "./RegistrationStepCounter.tsx";
import {determineModalContent} from "../../utils/RegistrationModalsUtils.tsx";

export const RegisterModal: React.FC = () => {
    const [step, setStep] = useState<number>(3);

    const stepBtnClicked = () => {
        step === 1 || step === 4 || step >= 6 ? setStep(step): setStep(step - 1);
    }

    return (
        <div className="flex justify-center items-center w-full h-full">
            <Modal>
                <div>
                    <RegistrationStepCounter step={step} changeStep={stepBtnClicked} />

                    <div className="w-full h-fit flex justify-center items-center">
                        { determineModalContent(step) }
                    </div>

                </div>
            </Modal>
        </div>
    );
}