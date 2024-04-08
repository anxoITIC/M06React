import React from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM desde 'react-dom', no desde 'react-dom/client'
import './index.css';
import LlistatTasques from './llistatTasques'; // Asegúrate de usar LlistatTasques (con la primera letra en mayúscula) en lugar de llistatTasques
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LlistatTasques /> {/* Utiliza LlistatTasques con la primera letra en mayúscula */}
  </React.StrictMode>
);

reportWebVitals();
