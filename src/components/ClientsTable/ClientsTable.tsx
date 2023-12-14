import { styled } from 'styled-components';
import Table from '../Table';

const Wrapper = styled.div`
    width: 100%;
`

const TableWrapper = styled.div`
    width: 60%;
    margin: auto;
`

const clientData = {
    data: [
        {name: "Terry Dorwart", phone: "0210234567", email: "home@gmail.com"},
        {name: "Charlie Vacarro", phone: "0210234567"},
        {name: "Omar Carder", email: "home@gmail.com"},
    ],
    keys: ['name', 'phone', 'email']
}

const ClientsTable = () => {
    const tableStatus = 'success';
    return <Wrapper>
        <TableWrapper>
            <Table status={tableStatus} keys={clientData.keys} data={clientData.data} />
        </TableWrapper>
    </Wrapper>
}

export default ClientsTable;