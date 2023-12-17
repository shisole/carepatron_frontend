import { ReactNode, createContext, useContext, useState } from 'react';


type ModalState = {
    isModalOpen: boolean;
}

interface ClientModalContextData {
    modalState: ModalState;
    openModal: () => void;
    closeModal: () => void;
}

const Context = createContext<ClientModalContextData | undefined>(undefined);

export const useClientModalContext = () => {
    const context = useContext(Context);

    if (!context) {
        console.log('client modal context must be within provider')
    }

    return context;
}

interface ClientsModalContextProviderProps {
    children: ReactNode
}


const ClientModalContextProvider: React.FC<ClientsModalContextProviderProps> = ({ children }) => {
    const [modalState, setModalState] = useState<ModalState>({ isModalOpen: false });
    
    const openModal = () => {
        setModalState({ ...modalState, isModalOpen: true });
    }

    const closeModal = () => {
        setModalState({ ...modalState, isModalOpen: false });
    }

    const contextValue: ClientModalContextData = {
        modalState,
        openModal,
        closeModal
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default ClientModalContextProvider;