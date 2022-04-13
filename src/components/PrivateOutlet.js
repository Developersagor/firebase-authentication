import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function PrivateOutlet() {
  const { user, isLoading } = UserAuth();
  if (isLoading) {
    return <p>loding</p>;
  }
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
}
