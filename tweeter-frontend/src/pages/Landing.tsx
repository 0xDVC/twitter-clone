import React from 'react';
import { RegisterModal } from "../features/register/components/register_modal/RegisterModal.tsx";
import "../assets/global.css";

export const Landing: React.FC = () => {
    return (
        <div className="bg-color h-full w-full">
            <RegisterModal />
        </div>
    );
}