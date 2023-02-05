import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App'
import './index.scss'
import {RecoilRoot} from "recoil";
import {RecoilDevTools} from "recoil-toolkit";

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
  }
], {
  basename: '/front-folio',
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <React.StrictMode>
      <RecoilDevTools forceSerialize={true} />
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>
)
