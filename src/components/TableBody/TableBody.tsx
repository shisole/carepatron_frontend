import { TableHTMLAttributes } from "react";
import { styled } from "styled-components";

const TableBodyWrapper = styled.tbody`
    ${({ theme }) => theme.componentStyles.table.tableBody}
`;

interface TableBody extends TableHTMLAttributes<HTMLTableSectionElement> {}

const TableBody: React.FC<TableBody> = ({ children, ...rest }) => (<TableBodyWrapper {...rest}>{children}</TableBodyWrapper>)


// const TableBody = <T extends Record<string, GenericValue>>({ data, tableKeys }: TableBodyProps<T>) => {
//     return <TableBodyWrapper>
//         {
//             data.map((tableData, index) =>
//                 <TableRow key={index}>
//                     {tableKeys.map((tableKey) =>
//                             <TableCell key={tableKey}>
//                                 {tableData[tableKey]}
//                             </TableCell>)}
//                 </TableRow>
//             )
//         }
//     </TableBodyWrapper>
// }

export default TableBody;