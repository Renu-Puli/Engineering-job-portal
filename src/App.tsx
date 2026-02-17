import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SavedJobs from "./pages/SavedJobs";
import AppliedJobs from "./pages/AppliedJobs";
import Login from "./pages/Login";
import Register from "./pages/Register";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem("currentUser");
  return user ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/saved"
          element={
            <PrivateRoute>
              <SavedJobs />
            </PrivateRoute>
          }
        />
        <Route
          path="/applied"
          element={
            <PrivateRoute>
              <AppliedJobs />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}