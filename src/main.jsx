import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import FacilitiesList from './pages/FacilitiesList/FacilitiesList';
import FacilityForm from './pages/FacilityForm/FacilityForm';
import NotFound from './pages/NotFound/NotFound';
import './styles/_css-reset.scss';
import './styles/_variables.scss';
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <FacilitiesList /> },
      { path: 'facility/new', element: <FacilityForm /> },
      { path: 'facility/edit/:id', element: <FacilityForm /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
