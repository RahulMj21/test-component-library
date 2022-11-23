import React from "react";

export interface Props {
    label: string;
}

const Buttons = ({ label }: Props) => {
    return <button>{label}</button>;
};

export default Buttons;
