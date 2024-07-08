import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './style/style.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    <App />
  </React.StrictMode>
);
