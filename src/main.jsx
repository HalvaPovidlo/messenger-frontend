import React from 'react'
import ReactDOM from 'react-dom/client'
import Messenger from './routes/Messenger.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider, redirect, BrowserRouter,
} from "react-router-dom";

import RegisterForm from "./components/RegisterForm";
import ErrorPage from "./components/error-page";
import LoginForm from "./components/LoginForm.jsx";
import App from "./App.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <App />
  </React.StrictMode>
)
