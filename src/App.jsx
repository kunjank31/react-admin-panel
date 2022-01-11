import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserList from "./Pages/UserList";
import ProductList from "./Pages/ProductList";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import EditUser from "./Pages/EditUser";
import EditProduct from "./Pages/EditProduct";
import NewUser from "./Pages/NewUser";
import NewProduct from "./Pages/NewProduct";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <UserList />
        </Route>
        <Route exact path="/user/edit/:id">
          <EditUser />
        </Route>
        <Route exact path="/user/create">
          <NewUser />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path="/product/create">
          <NewProduct />
        </Route>
        <Route exact path="/product/edit/:id">
          <EditProduct />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
