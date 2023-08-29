import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

function PrimaryButton (props: ButtonProps) {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default PrimaryButton;