import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider } from './context';
import { ScrollToTop } from './components';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop />
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>
);
