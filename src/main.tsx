import React from 'react';
import ReactDOM from 'react-dom/client';
import { Demo } from './demo';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
);
