interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    danger?: boolean;
    secondary?: boolean;
}

const Button = ({onClick, children, className = 'c-button', type = 'button', disabled, danger, secondary}: ButtonProps) => {
    return (
        <button
            className={`${className} ${disabled && 'is-disabled'} ${danger && 'is-danger'} ${secondary && 'is-secondary'}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
