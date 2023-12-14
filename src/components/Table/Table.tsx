import { styled } from "styled-components";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

type Status = "loading" | "success" | "error"


interface TableData {
    [key: string]: string | number | boolean | null
}

interface TableProps {
    status: Status,
    data: Array<TableData>,
    keys: Array<string>,
}

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
`;


const Table = ({ status, keys, data }: TableProps) => {
    return <StyledTable>
        <TableHeader tableKeys={keys}/>
        <TableBody data={data} tableKeys={keys}/>
    </StyledTable>

}

export default Table;


/***
 * name
 * phone
 * email
 * 
 * [{name, phone, email}]
 * 
 * {
 *  name: Terry Dorwart,
 *  phone: 021123,
 *  email: something
 * }
 * 
 * 
*/