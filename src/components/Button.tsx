import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: HTMLButtonElement['type'];
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({onClick, children, className = 'c-button', type = 'button', disabled}) => {
    return (
        <button className={`${className} ${disabled && 'is-disabled'}`} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
