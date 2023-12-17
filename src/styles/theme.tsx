import { css } from 'styled-components';
import buttonStyles from './buttonStyles';

const colorValues =  {
    white: '#FFFFFF',
    black: '#000000',
    green: '#00A859',
    red: '#FF0000',

    gray: '#333333',
    lightGray: '#AAAAAA',
    lighterGray: "#CCCCCC",
    lightestGray: "#999999",
    feintGray: "#F1F2F5",

    
    dirtyGray: '#F2F4F7',
    lightBlue: '#3F5EF6',
    brightBlue: '#007BFF',
};

export const breakpoints = {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
  };
  

const globalStyle = css`
    background-color: ${({ theme }) => theme.colors.dirtyGray};
    display: flex;
    margin: 0;
    min-height: 100vh;
    justify-content: center;
    align-items: flex-start;
`;

const defaultComponentStyles = {
    table: {
        tableHead: css`
            text-align: start;
            padding: 18px 0 18px 32px;
            color: ${({ theme }) => theme.colors.black};
        `,
        tableRow: css`
            text-algin: center;
            border-bottom: 1px solid ${({ theme }) => theme.colors.feintGray};
        `,
        tableBody: css`
            .highlighted {
                color: ${({ theme }) => theme.colors.lightBlue};
            }
        `,
        tableCell: css`
            text-align: start;
            padding: 18px 0 18px 32px;
            color: ${({ theme }) => theme.colors.gray};
        `,
    },
    textField: css`
        box-sizing: border-box;
        width: 100%;
        padding: 8px;
        font-size: 16px;
        border: 1px solid ${({ theme }) => theme.colors.lighterGray};
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.white};
        
        &:hover {
            border-color: ${({ theme }) => theme.colors.lightGray};
        }
        
        &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.brightBlue};
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }

        &.has_error {
            border-color: ${({ theme }) => theme.colors.red};
        }
    `
}


const theme = {
    colors: colorValues,
    buttonStyles,
    globalStyle,
    componentStyles: defaultComponentStyles
}

export default theme;