import { css } from 'styled-components';
import buttonStyles from './buttonStyles';

const colorValues =  {
    white: '#FFFFFF',
    black: '#000000',
    red: '#FF0000',

    gray: '#333333',
    feintGray: "#F1F2F5",

    
    dirtyGray: '#F2F4F7',
    lightBlue: '#3F5EF6',
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
        
        `,
        tableCell: css`
            text-align: start;
            padding: 18px 0 18px 32px;
            color: ${({ theme }) => theme.colors.gray};
        `,
    }
}


const theme = {
    colors: colorValues,
    buttonStyles,
    globalStyle,
    componentStyles: defaultComponentStyles
}

export default theme;