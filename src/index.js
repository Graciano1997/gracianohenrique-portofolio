import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import App from './App';
import Tempo from './components/Tempo';



const root=ReactDOM.createRoot(
  document.getElementById('root'));
  
root.render(<App/>)

const time=ReactDOM.createRoot(document.getElementById('tempo'))
setInterval(function(){time.render(<Tempo/>)},1000);

