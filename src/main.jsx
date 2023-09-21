import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'; // Importa los estilos CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.js';   // Importa los scripts de JavaScript de Bootstrap (opcional)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
