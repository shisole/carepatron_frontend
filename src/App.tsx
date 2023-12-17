import { useState } from 'react';

import ClientsTable from './components/ClientsTable';
import DefaultLayout from './components/Layout/DefaultLayout';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import ClientModalContextProvider from './utils/ClientModalContext';
import ClientsModal from './components/ClientsModal';
import { IntlProvider } from 'react-intl'
import English from './lang/en-US.json';
import Spanish from './lang/es-ES.json';
import Deutsch from './lang/de-DE.json';
import French from './lang/fr-FR.json';
import Chinese from './lang/zh-CN.json';
import Japanese from './lang/jp-JP.json';
import styled from 'styled-components';
import { breakpoints } from "./styles/theme";

const navigatorLocale = navigator.language;

type Locale = 'en-US' | 'de-DE' | 'es-ES' | 'zh-CN' | 'jp-JP' | 'fr-FR';

const localeMap = {
  'en-US': English,
  'de-DE': Deutsch,
  'es-ES': Spanish,
  'zh-CN': Chinese,
  'jp-JP': Japanese,
  'fr-FR': French
};

const localeFlagMap = {
  'en-US': '🇺🇸',
  'de-DE': '🇩🇪',
  'es-ES': '🇪🇸',
  'zh-CN': '🇨🇳',
  'jp-JP': '🇯🇵',
  'fr-FR': '🇫🇷'
}

interface Messages {
  [key: string]: string;
}

const LocaleFlagsWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  left: 5%;


  @media(max-width: ${breakpoints.tablet}) {
    left: 40%;
  }
`;

const LocaleFlagSelector = styled.select`
  background-color: ${({ theme }) => theme.colors.gray};
`

export const App = () => {
  const [locale, setLocale] = useState<Locale>(navigatorLocale as Locale);
  const [messages, setMessages] = useState<Messages>(localeMap[locale]);

  const selectLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    setLocale(newLocale);
    if (localeMap[newLocale]) {
      setMessages(localeMap[newLocale])
    }
  }

 return <IntlProvider locale={locale} defaultLocale='en' messages={messages}>
  <ThemeProvider theme={theme}>
    <DefaultLayout>
      <ClientModalContextProvider>
        <ClientsModal />
        <ClientsTable />
      </ClientModalContextProvider>
      <LocaleFlagsWrapper>
        <LocaleFlagSelector value={locale} onChange={selectLang}>
            {(Object.keys(localeMap) as Locale[]).map((lang) => (
              <option key={lang} value={lang}>
                <>{localeFlagMap[lang]}{lang}</>
              </option>
            ))}
        </LocaleFlagSelector>
      </LocaleFlagsWrapper>
    </DefaultLayout>
 </ThemeProvider>
 </IntlProvider>
}