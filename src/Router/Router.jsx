import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
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
import UserPaymentHistory from "../Pages/UserPaymentHistory/UserPaymentHistory";
import BlogPost from "../Pages/Dashboard/BlogPost";
import BlogDetails from "../Pages/BlogsDetails/BlogsDetails";
import Blogs from "../Pages/Blogs/Blogs";
import DashboardOverview from "../Pages/Dashboard/DashboardOverview";
import AdminRoute from "../Routes/AdminRoute";

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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/blogs_details/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://easy-store-server-zh6b.vercel.app/blog-details/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://easy-store-server-zh6b.vercel.app/prodcut_details/${params.id}`)
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
                path: '/payment-history',
                element: <UserPaymentHistory></UserPaymentHistory>
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
        element: <PrivateRoute><AdminRoute><Dashboard></Dashboard></AdminRoute></PrivateRoute>,
        children: [
            {
                path: '/dashboard/overview',
                element: <PrivateRoute><AdminRoute><DashboardOverview></DashboardOverview></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/all-product',
                element: <PrivateRoute><AdminRoute><AllProducts></AllProducts></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/Sellers',
                element: <PrivateRoute><AdminRoute><Sellers></Sellers></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/orders',
                element: <PrivateRoute><AdminRoute><Orders></Orders></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <PrivateRoute><AdminRoute><AddProduct></AddProduct></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/transaction',
                element: <PrivateRoute><AdminRoute><Transaction></Transaction></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/account',
                element: <PrivateRoute><AdminRoute><Account></Account></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/reviews',
                element: <PrivateRoute><AdminRoute><Account></Account></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/brands',
                element: <PrivateRoute><AdminRoute><Brands></Brands></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/statistics',
                element: <PrivateRoute><AdminRoute><Statistics></Statistics></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/blog-post',
                element: <PrivateRoute><AdminRoute><BlogPost></BlogPost></AdminRoute></PrivateRoute>
            }
        ]
    }
])


export default router