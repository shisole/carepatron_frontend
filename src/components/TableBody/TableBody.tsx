import { TableHTMLAttributes } from "react";
import { styled } from "styled-components";

const TableBodyWrapper = styled.tbody`
    ${({ theme }) => theme.componentStyles.table.tableBody}
`;

interface TableBody extends TableHTMLAttributes<HTMLTableSectionElement> {}

const TableBody: React.FC<TableBody> = ({ children, ...rest }) => (<TableBodyWrapper {...rest}>{children}</TableBodyWrapper>)

export default TableBody;