import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from './screens/Nosotros';
import Inicio from './screens/Inicio';
import Contactanos from './screens/Contactanos';
import Producto from './screens/Producto';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="Inicio" element={<App />} />
      <Route path="/" element={<Inicio />} />
      <Route path="Nosotros" element={<Nosotros />} />
      <Route path="Contactanos" element={<Contactanos />} />
      <Route path="Producto" element={<Producto />} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();
reportWebVitals();
