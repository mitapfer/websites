import React from 'react';
import './button.scss';

interface Props {
    text: string;
    funct: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    styles?: React.CSSProperties;
}

const Button = ({text, funct, styles}: Props) => {
    return (
        <div className="button__wrapper" style={styles}>
            <button onClick={funct} className="button" type="submit">{text}</button>
        </div>
    )
}

export default Button;