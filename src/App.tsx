import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import SavedJobs from "./pages/SavedJobs";
import AppliedJobs from "./pages/AppliedJobs";
import InterviewQuestions from "./pages/InterviewQuestions";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

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
        <Route
          path="/prep/:role"
          element={
            <PrivateRoute>
              <InterviewQuestions />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}