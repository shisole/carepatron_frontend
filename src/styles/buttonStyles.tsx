import { css } from 'styled-components';

const defaultButtonStyles = css`
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    padding: 10px 16px;
    border: unset;
    border-radius: 6px;
    font-size: 12px;
    font-family: Arial;
    cursor: pointer;
`

const buttonStyles = {
    variants: {
        unstyled: css`
            ${defaultButtonStyles};
        `,
        default: css`
            ${defaultButtonStyles};
            background-color: ${({ theme }) => theme.colors.white};
        `,
        primary: css`
            ${defaultButtonStyles};
            background-color: ${({ theme }) => theme.colors.brightBlue};
            color: ${({ theme }) => theme.colors.white}
        `,
        secondary: css`
            ${defaultButtonStyles};
            background-color: ${({ theme }) => theme.colors.gray};
            color: ${({ theme }) => theme.colors.white}

        `
    }
}

export default buttonStyles;