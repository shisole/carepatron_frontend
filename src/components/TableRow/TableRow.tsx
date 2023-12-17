import { TableHTMLAttributes } from "react";
import { styled } from "styled-components"

const TableRowWrapper = styled.tr`
    ${({ theme }) => theme.componentStyles.table.tableRow}
`;

interface TableRow extends TableHTMLAttributes<HTMLTableRowElement> {}

const TableRow: React.FC<TableRow> = ({ children, ...rest }) => <TableRowWrapper {...rest}>{children}</TableRowWrapper>

export default TableRow;