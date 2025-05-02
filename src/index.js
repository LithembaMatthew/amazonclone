
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext, {AuthContextProvider} from "./context/authContext";
import { ShoppingState } from "./context/shopping/ShoppingState";

ReactDOM.render(
  <BrowserRouter>
  <AuthContextProvider>
    <ShoppingState>
    <App />
    </ShoppingState>
  </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);






// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );