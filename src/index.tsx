import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import React from 'react'

import './style/globalStyle.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals()
