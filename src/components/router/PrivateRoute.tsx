import { Navigate, Outlet } from "react-router-dom";
import { Mainlayout } from "../layout/Mainlayout";

export const PrivateRoute = ({
    auth,
    ...rest
}: {
    auth: boolean;
}): JSX.Element => {
    if (auth) {
        return (
            <Mainlayout >
                <Outlet />
            </Mainlayout >
        );


    }
    return <Navigate to="/login" replace />;
};
