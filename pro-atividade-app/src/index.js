import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


//document.getElementById('root') - busca o elemento no html com id root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //deve ser rederizado dentro da tela root
  <React.StrictMode>
    <div className="container">
      <App /> {/* redenriza o componente App*/}
    </div>
    
  </React.StrictMode>
);