import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider, CartProvider } from './context';
import { ScrollToTop } from './components';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer
            closeButton={false}
            autoClose={3000}
            position={'bottom-right'}
          />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
