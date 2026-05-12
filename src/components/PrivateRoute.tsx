import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const user = localStorage.getItem("currentUser");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}