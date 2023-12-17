import { styled } from 'styled-components';
import Table from '../Table';
import { useDispatch, useSelector } from 'react-redux';
import { ClientInfo } from '../../types/Client';
import Button from '../Button/Button';
import { FormattedMessage } from 'react-intl';
import TextField from '../TextField';
import { getFilteredClients, setSearchQuery, getClientsSearchQuery } from '../../slices/clients/clients';
import { useClientModalContext } from '../../utils/ClientModalContext';
import { breakpoints } from "../../styles/theme";


const Wrapper = styled.div`
    width: 100%;
    padding: 40px 25px;
`

const TableWrapper = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
        margin-bottom: 10px;
    }
`


const TableTitle = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font-size: 18px;
    font-weight: bold;
`;

const TextLabel = styled.span`
    letter-spacing: -0.5px;
`

const SearchBar = styled(TextField)`
    width: 250px;

    @media(max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        width: 100%;
    }
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;

    @media(max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        > :not(:last-child) {
            margin-bottom: 10px;
        }
    }
`

const clientData = {
    keys: ['name', 'phone', 'email']
}

interface ClientNameProps {
    firstName: string;
    lastName: string;
}

const getClientName = ({ firstName, lastName }: ClientNameProps): string => {
    return `${firstName} ${lastName}`;
}

const ClientsTable = () => {
    const dispatch = useDispatch();
    const clientModal = useClientModalContext();
    const clients: Array<ClientInfo> = useSelector(getFilteredClients);
    const searchQuery = useSelector(getClientsSearchQuery);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    }
    return <Wrapper>
        <TableWrapper>
            <TableTitle><FormattedMessage id={"client_table.title"} defaultMessage={"Clients"}/></TableTitle>
            <SearchWrapper>
            <SearchBar placeholder='Search clients...' onChange={handleChange} value={searchQuery} />
            <Button $variant='primary' onClick={clientModal?.openModal}>
                <TextLabel>
                    <FormattedMessage
                        id="client_table.create_client_btn"
                        defaultMessage={"Create new client"}
                    />
                </TextLabel>
            </Button>
            </SearchWrapper>
            <Table>
                <Table.TableHead>
                    <Table.TableRow>
                        {clientData.keys.map(key => <Table.TableHeaderCell key={key}><FormattedMessage id={`client_table.th_${key}`} defaultMessage={key}/></Table.TableHeaderCell>)}
                    </Table.TableRow>
                </Table.TableHead>
                <Table.TableBody>
                    {
                        clients.map((clientInfo, clientIndex) => <Table.TableRow key={clientIndex}>
                            <Table.TableCell className='highlighted'>
                                {getClientName(clientInfo)}
                            </Table.TableCell>
                            <Table.TableCell>
                                {clientInfo.phone && <FormattedMessage
                                    id="client_table.phoneNumber"
                                    defaultMessage={"{phoneNumber}"}
                                    values={{
                                        phoneNumber: clientInfo.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
                                    }}
                                />}
                            </Table.TableCell>
                            <Table.TableCell>
                                {clientInfo.email}
                            </Table.TableCell>
                        </Table.TableRow>)
                    }
                </Table.TableBody>
            </Table>
        </TableWrapper>
    </Wrapper>
}

export default ClientsTable;