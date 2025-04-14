import "./App.css";
import { Route } from "react-router-dom";
import Home from "./component/Home";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
};

export default App;

// ourdomain.com/ => home screen or home component
// ourdomain.com/products => product list component
