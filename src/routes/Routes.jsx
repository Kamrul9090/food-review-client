import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AllFoods from "../pages/FoodServices/AllServices/AllFoods/AllFoods";
import AllServices from "../pages/FoodServices/AllServices/AllServices";
import Burger from "../pages/FoodServices/AllServices/Burger/Burger";
import Fish from "../pages/FoodServices/AllServices/Fish";
import Meat from "../pages/FoodServices/AllServices/Meat";
import Rice from "../pages/FoodServices/AllServices/Rice";
import Services from "../pages/FoodServices/AllServices/Services";
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
                element: <AllServices></AllServices>,
                children: [
                    {
                        path: '/AllServices/AllFoods',
                        element: <AllFoods></AllFoods>
                    },
                    {
                        path: '/AllServices/burger',
                        element: <Burger></Burger>
                    },
                    {
                        path: '/AllServices/fish',
                        element: <Fish></Fish>
                    },
                    {
                        path: '/AllServices/rice',
                        element: <Rice></Rice>
                    },
                    {
                        path: '/AllServices/meat',
                        element: <Meat></Meat>
                    },
                ]
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