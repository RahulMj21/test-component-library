import React from "react";
import "./Button.css";

export interface Props {
    label: string;
}

const Buttons = ({ label }: Props) => {
    return <button>{label}</button>;
};

export default Buttons;
