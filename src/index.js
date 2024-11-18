import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Getter } from './contextpi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/scroll/scroll';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Getter>
    <App  />
    <ScrollToTop />
    <ToastContainer position='fixed'/>
    </Getter>
    
   
//  </React.StrictMode>
);

