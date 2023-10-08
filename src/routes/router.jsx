import { createBrowserRouter } from "react-router-dom";
import User from "../components/User";
import Root from "../layouts/Root";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <div>helooo</div>
            },
            {
                path: "/users",
                element: <User />,
                loader: () => fetch("https://jsonplaceholder.typicode.com/users")
            }
        ]
    },
    {
        path: "/admin",
        element: <div>admin</div>
    }
])

export default router