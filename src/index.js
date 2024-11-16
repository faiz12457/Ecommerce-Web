import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Getter } from './contextpi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Getter>
    <App />
    </Getter>
  </React.StrictMode>
);

