import styled from "styled-components";
import { StyledInputProps } from "../../utils/GlobalInterfaces.ts";
import { determineStyledInputBorder } from "../../utils/DetermineStylesUtils.ts";
import { determineLabelColor } from "../../utils/DetermineStylesUtils.ts";


export const StyledInputBox = styled.div<StyledInputProps>`
    position: relative;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    border: ${ (props) => determineStyledInputBorder(props) }
`;

export const StyledInputLabel = styled.span<StyledInputProps>`
    position: absolute;
    left: 10px;
    font-weight: 400;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: ${ (props) => props.active ? '13px' : '18px' };
    top: ${ (props) => props.active ? '5px' : '16px' };
    color: ${ (props) => determineLabelColor(props) };
`;