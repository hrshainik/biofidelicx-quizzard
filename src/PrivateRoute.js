import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { currUser } = useAuth();
  let location = useLocation();

  if (!currUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
