import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/router";
import { Login } from "./pages/Account";
import { Admin } from "./pages/Admin";
import { Emloyees } from "./pages/Emloyees";
import { Notfound } from "./pages/Notfound";
import { Timekeeping } from "./pages/Timekeeping";
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
                {
                    path: "emloyees",
                    element: <Emloyees />,
                },
                {
                    path: "timekeeping",
                    element: <Timekeeping />,
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
        // Quản lý nhân sự

    ]);
    return (
        <div className="App" id="wrapper">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
