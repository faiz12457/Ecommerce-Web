import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Getter } from './contextpi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Getter>
    <App  />
    </Getter>
    <ToastContainer position='fixed'
 />

  </React.StrictMode>
);

