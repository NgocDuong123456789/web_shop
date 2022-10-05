import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyle from "./Component/GlobalStyle/GlobalStyle";
// import { Provider } from "react-redux";
// import { store } from "./Component/Redux/Store/Store";
import {UseContext} from './Component/useContext/useContext'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <UseContext>
      <App />
      </UseContext>
    </GlobalStyle>
  </React.StrictMode>
);

