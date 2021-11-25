import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
   <React.StrictMode>
      <Auth0Provider
         domain="dev-comt47ws.us.auth0.com"
         clientId="ohLAZQJXrWKxpsWDDt0LoVarM8jy7sea"
         redirectUri={window.location.origin}
         cacheLocation="localstorage"
      >
         <GithubProvider>
            <App />
         </GithubProvider>
      </Auth0Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//
//
//
// <Auth0Provider
//     domain="dev-comt47ws.us.auth0.com"
//     clientId="Jk2lDrIQNqepq2UCAJul9mfzRHCikCjm"
//     redirectUri={window.location.origin}
//   ></Auth0Provider>

// Auth0
// domain
// dev-comt47ws.us.auth0.com
// client ID
// ohLAZQJXrWKxpsWDDt0LoVarM8jy7sea
//
// github-user-db-connection
// Database Identifier
// con_crvRYDqawvRKYnph
//
