import React, {ReactElement} from 'react';
import "../../assets/global.css";


interface ModalProps {
    children: ReactElement | ReactElement[]
}

export const Modal: React.FC<ModalProps> = ( props: ModalProps) => {
  return (
          <div className="flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-10 h-screen w-screen">
              <div className="bg-color w-[600px] h-[650px] flex flex-col justify-between border rounded-[20px]">
                    {props.children}
              </div>
          </div>
  );
};