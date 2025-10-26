import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import FacilitiesList from './pages/FacilitiesList/FacilitiesList';
import './styles/_css-reset.scss';
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <FacilitiesList /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
