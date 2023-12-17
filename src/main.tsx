import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import store from './store';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale='en' defaultLocale='en'><App /></IntlProvider>
    </Provider>
  </React.StrictMode>,
)
