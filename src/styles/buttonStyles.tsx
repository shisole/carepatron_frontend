import { css } from 'styled-components';

const defaultButtonStyles = css`
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    padding: 4px 8px;
`

const buttonStyles = {
    variants: {
        default: css`
            ${defaultButtonStyles};
            background-color: ${({ theme }) => theme.colors.white};
        `,
        primary: css`
            ${defaultButtonStyles};
            background-color: ${({ theme }) => theme.colors.lightBlue};
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