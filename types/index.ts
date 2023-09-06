import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string; // ?: means optional
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}