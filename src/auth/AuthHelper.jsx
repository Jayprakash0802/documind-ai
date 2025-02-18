// AuthHelper.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SkeletonLoader from "../components/SkeletonLoader";

const AuthHelper = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <SkeletonLoader />;
  }
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
export default AuthHelper;
