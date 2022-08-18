import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './components/GlobalStyles';
import App from './App';
import axios from 'axios'
import './i18next'
import { ExtensionsProvider } from './components/GlobalStates/ExtensionsContext';
import { UserProvider } from './components/GlobalStates/UserContext';
import { SubjectProvider } from './components/GlobalStates/SubjectsContext';
import { CookiesProvider } from 'react-cookie';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
      <CookiesProvider>
        <UserProvider>
          <SubjectProvider>
            <ExtensionsProvider>
              <App />
            </ExtensionsProvider>
          </SubjectProvider>
        </UserProvider>
      </CookiesProvider>
    </GlobalStyles>
);
