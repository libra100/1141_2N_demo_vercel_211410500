import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './blog_00.scss';
import App from './App_00.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
