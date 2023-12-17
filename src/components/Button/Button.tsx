import { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components"


type ButtonVariants = "default" | "primary" | "secondary" | "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    $variant?: ButtonVariants;
}

const StyledButton = styled.button<ButtonProps>`
    ${({ $variant, theme }) => theme.buttonStyles.variants[$variant ?? 'default']}
`

const Button: React.FC<ButtonProps> = ({ children, $variant, onClick, ...rest}) => {
    return <StyledButton $variant={$variant} onClick={onClick} {...rest}>
        {children}
    </StyledButton>
}

export default Button;