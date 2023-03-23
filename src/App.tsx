import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/router";
import { Login } from "./pages/Account";
import { Admin } from "./pages/Admin";
import "./styles/sb-admin-2.min.css";

function App() {
    const isLogin = false
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PrivateRoute auth={isLogin} />,
            children: [
                {
                    index: true,
                    element: <Admin />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);
    return (
        <div className="App" id="wrapper">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
