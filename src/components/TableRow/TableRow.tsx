import { styled } from "styled-components"

interface TableRowProps {
    children?: React.ReactNode
}

const TableRowWrapper = styled.tr`
    ${({ theme }) => theme.componentStyles.table.tableRow}
`;

const TableRow = ({ children }: TableRowProps) => {
    return <TableRowWrapper>{children}</TableRowWrapper>
}

export default TableRow;