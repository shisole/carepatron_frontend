import { TableHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const TableCellWrapper = styled.td`
    ${({ theme }) => theme.componentStyles.table.tableCell}
`;

interface TableCell extends TableHTMLAttributes<HTMLTableCellElement> {}

const TableCell: React.FC<TableCell> = ({ children, ...rest }) => <TableCellWrapper {...rest}>{children}</TableCellWrapper>

export default TableCell;