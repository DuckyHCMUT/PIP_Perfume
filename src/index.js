import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";
import BlankPage from "./pages/BlankPage";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
//import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import AdminAddItemPage from "./pages/AdminAddItemPage";
// import AdminDeleteItemPage from "./pages/AdminDeleteItemPage";
import AdminUpdateItemPage from "./pages/AdminUpdateItemPage";

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
            <Route path="/AboutUs" component={AboutUs} />
            {/* <Route path="/admin/auth" component={AdminLogin} /> */}
            <Route exact path="/admin/dashboard" component={AdminHome} />
            <Route
                exact
                path="/admin/dashboard/items/add"
                component={AdminAddItemPage}
            />
            <Route
                exact
                path="/admin/dashboard/items/update"
                component={AdminUpdateItemPage}
            />
        </Switch>
    </BrowserRouter>,
    rootElement
);
