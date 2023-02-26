import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AllServices from "../pages/FoodServices/AllServices/AllServices";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Sign in/SignIn";
import SignUp from "../pages/Sign in/SignUp";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/AllServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
        ],

    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
])