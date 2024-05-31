import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  App()
);

function Input() {
  return <input type="text" placeholder='Ingresa un Texto'/>
}
