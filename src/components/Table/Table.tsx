import { styled } from "styled-components";
import TableBody from "../TableBody";
import TableCell from "../TableCell";
import TableHead from "../TableHead";
import TableHeaderCell from "../TableHeaderCell";
import TableRow from "../TableRow";
import { breakpoints } from "../../styles/theme";

const TableWrapper = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    overflow-x: auto;

    @media(max-width: ${breakpoints.tablet}) {
        th, td {
            display: block;
            box-sizing: border-box;
        }

        th {
            display: none;
        }
    }
`;

const Table: React.FC<{ children: React.ReactNode}> & { 
    TableHead: typeof TableHead;
    TableHeaderCell: typeof TableHeaderCell;
    TableBody: typeof TableBody;
    TableRow: typeof TableRow;
    TableCell: typeof TableCell;
} = ({ children }) => <TableWrapper>{children}</TableWrapper>


Table.TableHead = TableHead;
Table.TableHeaderCell = TableHeaderCell;
Table.TableBody = TableBody;
Table.TableRow = TableRow;
Table.TableCell = TableCell;


export default Table;

