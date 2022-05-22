import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Devis from "./Devis/Devis";
import store from './redux/store';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DevisForm from "./Devis/Devis-form";
import DevisPdf from "./Devis/Devis-pdf/DevisPdf";

const root = ReactDOM.createRoot(document.querySelector("#root"));
// document.body.style='background: #d5e4ff;'
document.body.style='font-size:15px'
root.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Provider store={store}><App/></Provider>} />
        <Route path="devis-form" element={<Provider store={store}><DevisForm/></Provider>} />
        <Route path="devis" element={<Provider store={store}><Devis/></Provider>} />
        <Route path="devis-pdf" element={<Provider store={store}><DevisPdf/></Provider>}/>
      </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
