import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PetsPage from './components/OurPetsPage/PetsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/ourPets',
    element: <PetsPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
