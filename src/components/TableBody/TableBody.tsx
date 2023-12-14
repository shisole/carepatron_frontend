import { styled } from "styled-components";
import TableRow from "../TableRow";
// import { ClientInfo, Client } from "../../types/Client";


interface TableData {
    [key: string]: string | number | boolean | null
}

interface TableBodyProps {
    data: Array<TableData>,
    tableKeys: Array<string>    
}

const TableCell = styled.td`
    ${({ theme }) => theme.componentStyles.table.tableCell}
`


const TableBody: React.FC<TableBodyProps> = ({ data, tableKeys }: TableBodyProps) => {
    return data.map((tableData, index) => <TableRow key={index}>
        {tableKeys.map((tableKey) => <TableCell key={tableKey}>{tableData[tableKey]}</TableCell>)}
    </TableRow>)
}

export default TableBody;