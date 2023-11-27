import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: "Error",
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/order/:category',
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/secret',
                element: <PrivateRoute>
                    <Secret />
                </PrivateRoute>
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,
        children: [
            // normal user routes
            {
                path: 'userHome',
                element: <UserHome />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            },

            // admin routes
            {
                path: 'adminHome',
                element: <AdminHome />
            },
            {
                path: 'users',
                element: <AllUsers />
            },
            {
                path: 'addItems',
                element: <AdminRoute>
                    <AddItems />
                </AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute>
                    <ManageItems />
                </AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute>
                    <UpdateItem />
                </AdminRoute>,
                loader: ({ params }) => fetch(`https://bistro-boss-server-eta-seven.vercel.app/menu/${params.id}`)
            },
        ]
    }

]);

export default router;