import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const validUser = users.find(
      (user: any) => user.email === email && user.password === password
    );

    if (!validUser) {
      alert("Invalid credentials!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(validUser));

    navigate("/");
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}