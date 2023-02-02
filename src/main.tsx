import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.scss'
import {RecoilRoot} from "recoil";
import {RecoilDevTools} from "recoil-toolkit";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <React.StrictMode>
      <RecoilDevTools forceSerialize={true} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
)
