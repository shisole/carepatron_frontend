import { styled } from "styled-components"


type buttonVariants = "default" | "primary" | "secondary";

interface ButtonProps {
    variant: buttonVariants,
    text: string,
}

const StyledButton = styled.button<{ $variant?: string; }>`
    ${({ $variant }) => $variant ?? 'default'}
`

const Button = (props: ButtonProps) => {
    return <StyledButton $variant={props.variant}>
        {props.text}
    </StyledButton>
}

export default Button;