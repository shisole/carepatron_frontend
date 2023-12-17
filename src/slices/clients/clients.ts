import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { ClientInfo } from '../../types/Client';

interface ClientsState {
    clients: ClientInfo[];
    searchQuery: string;
}

const initialClients: ClientInfo[] = [
    {firstName: "Terry", lastName: "Dorwart", phone: "0210234567", email: "home@gmail.com"},
    {firstName: "Charlie", lastName: "Vacarro", phone: "0210234567"},
    {firstName: "Omar", lastName: "Carder", email: "home@gmail.com"},
];

const initialState: ClientsState = {
    clients: initialClients,
    searchQuery: ''
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        addClient: (state, action: PayloadAction<ClientInfo>) => {
            state.clients.unshift(action.payload)
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    }
})

export const { addClient, setSearchQuery } = clientsSlice.actions;
export const getClients = (state: RootState) => state.clients.clients;
export const getClientsSearchQuery = (state: RootState) => state.clients.searchQuery;
export const getFilteredClients = createSelector([(state: RootState) => state.clients.clients, (state: RootState) => state.clients.searchQuery], (clients, searchQuery) => {
    const query = searchQuery.toLowerCase();
    const RegexSearchQuery = RegExp(query, 'i');

    return clients.filter((clientInfo) => {
        return (RegexSearchQuery.test(clientInfo.firstName) || RegexSearchQuery.test(clientInfo.lastName) || (clientInfo.email && RegexSearchQuery.test(clientInfo.email)))
    })
})
export default clientsSlice.reducer;