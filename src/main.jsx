import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UseProvider } from './contexts/UseProvider';
import './sass/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter>

      <UseProvider>

          <App />

      </UseProvider>

    </BrowserRouter>

  </React.StrictMode>
  
)
