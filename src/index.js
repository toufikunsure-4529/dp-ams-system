import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NotFoundPage from './404page/NotFoundPage';
import App from './App';
import Layout from './Layout';
import Contact from './components/Contact/Contact';
import Placement from './components/placement/Placement';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NoticePage from './pages/NoticePage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<App />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/placement' element={<Placement />} />
    <Route path='/notice' element={<NoticePage />} />
    <Route path='/*' element={<NotFoundPage />} />
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
