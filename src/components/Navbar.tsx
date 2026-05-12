import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("currentUser");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const handleResetData = () => {
    if (window.confirm("Are you sure you want to clear all your saved/applied jobs?")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
      if (currentUser.email) {
        localStorage.removeItem(`savedJobs_${currentUser.email}`);
        localStorage.removeItem(`appliedJobs_${currentUser.email}`);
        window.location.reload();
      }
    }
  };

  return (
    <nav className="navbar">
      <h1>🚀 EngiJobs</h1>

      <div className="nav-links">
        {user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/saved">Saved</Link>
            <Link to="/applied">Applied</Link>
            <button onClick={handleResetData} className="reset-btn" style={{ marginLeft: '10px' }}>
              Reset Data
            </button>
            <button onClick={handleLogout} className="logout-btn" style={{ marginLeft: '10px' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}