import { styled } from 'styled-components';

const TableHeaderCellWrapper = styled.th`
    ${({ theme }) => theme.componentStyles.table.tableHead};
`

interface TableHeaderCell extends React.HTMLAttributes<HTMLTableCellElement> {}

const TableHeaderCell: React.FC<TableHeaderCell> = ({ children, ...rest }) => <TableHeaderCellWrapper {...rest}>{children}</TableHeaderCellWrapper>

export default TableHeaderCell;