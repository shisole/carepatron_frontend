import styled from "styled-components";

interface TextFieldProps extends React.ComponentProps<'input'> {
    label?: string | React.ReactNode;
    error?: string | React.ReactNode;
}

const StyledTextField = styled.input`
    ${({ theme }) => theme.componentStyles.textField};

    &::placeholder {
        color: ${({ theme }) => theme.colors.lightestGray};
    }
`

const TextFieldWrapper = styled.div`

`

const TextLabel = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};

    &.has_error {
        color: ${({ theme }) => theme.colors.red};
    }
`

const ErrorField = styled.p`
    color: ${({ theme }) => theme.colors.red};
    font-size: 8px;
`

const TextField = ({ children, label, error, className, ...rest}: TextFieldProps) => {
    return <TextFieldWrapper>
        <TextLabel className={className}>{label}</TextLabel>
        <StyledTextField {...rest} className={className}>{children}</StyledTextField>
        { error && <ErrorField>
            {error}
        </ErrorField>}
    </TextFieldWrapper>
}

export default TextField;