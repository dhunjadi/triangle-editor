interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    danger?: boolean;
}

const Button = ({onClick, children, className = 'c-button', type = 'button', disabled, danger}: ButtonProps) => {
    return (
        <button
            className={`${className} ${disabled && 'is-disabled'} ${danger && 'is-danger'}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
