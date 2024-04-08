import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/signin";
import { SignUp } from "./pages/auth/signup";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([


    {
        path: '/', 
        element: <AppLayout/>,
        children: [{path: '/', element: <Dashboard/>}]
    },
    {
        path: '/', 
        element: <AuthLayout/>,
        children: [
            {path: '/signin', element: <SignIn/>},
            {path: '/signup', element: <SignUp/>}
        ]
    },
    
    
    
])