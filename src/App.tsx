import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/router";
import { Login } from "./pages/Account";
import { Admin } from "./pages/Admin";
import { Notfound } from "./pages/Notfound";
import "./styles/sb-admin-2.css";

function App() {
    const isLogin = true;
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
            path: "login",
            element: <Login />,
        },
        {
            path: "*",
            element: <Notfound />,
        },
    ]);
    return (
        <div className="App" id="wrapper">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
