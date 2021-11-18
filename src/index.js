import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";
import BlankPage from "./pages/BlankPage";
import Checkout from "./pages/Checkout";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/login" component={Login} />
            <Route path="/user/register" component={Register} />
            <Route path="/user/cart" component={Cart} />
            <Route path="/product" component={ProductDetail} />
            <Route path="/BlankPage" component={BlankPage} />
            <Route path="/user/checkout" component={Checkout} />
        </Switch>
    </BrowserRouter>,
    rootElement
);
