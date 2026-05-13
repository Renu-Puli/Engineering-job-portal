import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate("/");
    }
  }, [navigate]);

  const handleRegister = () => {

    if (!name || !email || !password || !confirmPassword) {
      alert("All fields required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u: any) => u.email === email)) {
      alert("User already exists. Please login.");
      navigate("/login");
      return;
    }

    const newUser = { name, email, password };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert("Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>

        <input placeholder="Name" autoComplete="off" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" autoComplete="new-password"
          onChange={(e) => setConfirmPassword(e.target.value)} />


        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}