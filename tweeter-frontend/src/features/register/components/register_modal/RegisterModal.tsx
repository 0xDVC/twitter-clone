import React from "react";
import {Modal} from "../../../../components/modal/Modal.tsx";

export const RegisterModal: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <Modal>
                <h1 className="text-2xl text-center">Register</h1>
            </Modal>
        </div>
    );
}