import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RootLayout from "../layouts/root-layout";

const router=createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            }
        ]
    }
])

export const AppRouter=()=>{
    return <RouterProvider router={router}/>
}