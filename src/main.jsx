import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Provider} from 'react-redux'
import { store } from "./app/Store.js";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // here we use provider so that all childs of app component can access
  // the store 
    <Provider store={store}>
      <App />
    </Provider>
  // { </StrictMode> }
);
