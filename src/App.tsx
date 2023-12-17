import ClientsTable from './components/ClientsTable';
import DefaultLayout from './components/Layout/DefaultLayout';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import ClientModalContextProvider from './utils/ClientModalContext';
import ClientsModal from './components/ClientsModal';

export const App = () => {
 return <ThemeProvider theme={theme}>
    <DefaultLayout>
      <ClientModalContextProvider>
        <ClientsModal />
        <ClientsTable />
      </ClientModalContextProvider>
    </DefaultLayout>
 </ThemeProvider>
}