import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from './slices/clients';


const store = configureStore({
    reducer: {
        clients: clientsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;