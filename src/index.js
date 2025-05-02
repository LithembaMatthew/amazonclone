import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { ShoppingState } from "./context/shopping/ShoppingState";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ShoppingState>
        <App />
      </ShoppingState>
    </AuthContextProvider>
  </BrowserRouter>
);
