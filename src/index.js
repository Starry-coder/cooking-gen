import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,  
  },
  {
    path: "/search",
    element: <App/>,
  },
  {
    path: "/about",
    element: <Portfolio/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


