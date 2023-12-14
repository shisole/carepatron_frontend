import { styled } from "styled-components";
import TableRow from '../TableRow';

interface TableHeaderProps {
    tableKeys: Array<string>,
}

const TableHeadWrapper = styled.thead`
`;

const TableHead = styled.th`
    ${({ theme }) => theme.componentStyles.table.tableHead};
`



const TableHeader = ({ tableKeys }: TableHeaderProps) => {
    return <TableHeadWrapper>
        <TableRow>{tableKeys.map((tableKey, key) => <TableHead key={key}>{tableKey}</TableHead>)}</TableRow>
    </TableHeadWrapper>
}

export default TableHeader;