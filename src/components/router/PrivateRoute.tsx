import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({
    auth,
    ...rest
}: {
    auth: boolean;
}): JSX.Element => {
    if (auth) {
        return <Outlet />;
    }
    return <Navigate to="/login" replace />;
};
