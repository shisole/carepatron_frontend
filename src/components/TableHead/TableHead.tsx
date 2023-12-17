import { TableHTMLAttributes } from "react";
import { styled } from "styled-components";

const TableHeadWrapper = styled.thead`
`;

interface TableHead extends TableHTMLAttributes<HTMLTableSectionElement> {}

const TableHead: React.FC<TableHead> = ({ children, ...rest }) => <TableHeadWrapper {...rest}>{children}</TableHeadWrapper>

export default TableHead;