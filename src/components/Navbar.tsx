import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("currentUser");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>🚀 EngiJobs</h1>

      <div>
        {user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/saved">Saved</Link>
            <Link to="/applied">Applied</Link>
            <button onClick={handleLogout} className="logout-btn">
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