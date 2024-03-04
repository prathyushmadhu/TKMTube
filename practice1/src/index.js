import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
//import LoginPage from './LoginPage';
//import JasonServer from './JasonServer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Contact from './Contact';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';
import Gallery from './Gallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/blog",
    element: <App/>,
  },
  {
    path: "/Register",
    element: <RegisterPage/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Terms",
    element: <Terms/>,
  },
  {
    path: "/Privacy",
    element: <PrivacyPolicy/>,
  },
  {
    path: "/Gallery",
    element: <Gallery/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
>>>>>>> 22472f96b6bfa8594ae1d680415cbe685e15aa69
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
