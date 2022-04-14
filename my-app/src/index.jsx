import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>{/* stricmode sinaliza problemas em uma aplicação, n renderiza nenhum elemento visivel na interface */}
    <App /> {/* strict mode executa somente em modo de desenvolvimento e n impacta na build (contrução da produção) */}
  </React.StrictMode>,
  document.getElementById('root')
);

/* renderiza a aplicação atraves do root que está no documento
principal do html na pasta public index.html */