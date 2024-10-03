import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import DashboardInfo from "../Pages/Dashboard/DashboardInfo";
import AllProducts from "../Pages/Dashboard/AllProducts";
import Orders from "../Pages/Dashboard/Orders";
import Sellers from "../Pages/Dashboard/Sellers";
import AddProduct from "../Pages/Dashboard/AddProduct";
import Transaction from "../Pages/Dashboard/Transaction";
import Account from "../Pages/Dashboard/Account";
import Brands from "../Pages/Dashboard/Brands";
import Statistics from "../Pages/Dashboard/Statistics";
import Details from "../Pages/Details/Details";
import CartCheckout from "../Pages/CartCheckout/CartCheckout";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PaymentSuccess from "../Components/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Components/PaymentFail/PaymentFail";
import PaymentCancel from "../Components/PaymentCancel/PaymentCancel";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/prodcut_details/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CartCheckout></CartCheckout></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/payment-success',
                element: <PrivateRoute><PaymentSuccess></PaymentSuccess></PrivateRoute>
            },
            {
                path: '/payment-fail',
                element: <PrivateRoute><PaymentFail></PaymentFail></PrivateRoute>
            },
            {
                path: '/payment-cancel',
                element: <PrivateRoute><PaymentCancel></PaymentCancel></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/info',
                element: <DashboardInfo></DashboardInfo>
            },
            {
                path: '/dashboard/all-product',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/dashboard/Sellers',
                element: <Sellers></Sellers>
            },
            {
                path: '/dashboard/orders',
                element: <Orders></Orders>
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/transaction',
                element: <Transaction></Transaction>
            },
            {
                path: '/dashboard/account',
                element: <Account></Account>
            },
            {
                path: '/dashboard/reviews',
                element: <Account></Account>
            },
            {
                path: '/dashboard/brands',
                element: <Brands></Brands>
            },
            {
                path: '/dashboard/statistics',
                element: <Statistics></Statistics>
            },
        ]
    }
])


export default router