import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import React, { useEffect } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)

const Componente = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://www.ejemplo.com';
    }, 5000);

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  return <div>Redirigiendo a www.ejemplo.com en 5 segundos...</div>;
};

export default Componente;

