import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <AppProvider>
            <App />
        </AppProvider>
    </HashRouter>
);

