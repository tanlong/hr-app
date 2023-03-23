import { Navigate, Outlet, RouteProps } from "react-router-dom";

export const PrivateRoute = ({
    auth,
    ...rest
}: { auth: boolean } & RouteProps): JSX.Element => {
    if (auth) {
        return <Outlet />;
    }
    return <Navigate to="/login" replace />;
};
