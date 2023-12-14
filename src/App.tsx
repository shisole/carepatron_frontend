import ClientsTable from './components/ClientsTable';
import DefaultLayout from './components/Layout/DefaultLayout';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

export const App = () => {
 return <ThemeProvider theme={theme}>
    <DefaultLayout>
      <ClientsTable />
    </DefaultLayout>
 </ThemeProvider>
}