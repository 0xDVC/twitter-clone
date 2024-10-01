import { ReactElement } from "react";
import { FormOne } from "../components/register_modal/forms/FormOne.tsx";
import { FormTwo } from "../components/register_modal/forms/FormTwo.tsx";
import { FormThree } from "../components/register_modal/forms/FormThree.tsx";
import { FormFour } from "../components/register_modal/forms/FormFour.tsx";
import { FormFive } from "../components/register_modal/forms/FormFive.tsx";
import { FormSix } from "../components/register_modal/forms/FormSix.tsx";

export const determineModalContent = (step: number): ReactElement => {
    switch(step) {
        case 1:
            return <FormOne />
        case 2:
            return <FormTwo />
        case 3:
            return <FormThree />
        case 4:
            return <FormFour />
        case 5:
            return <FormFive />
        case 6:
            return <FormSix />
        default:
            return <></>
    }
}