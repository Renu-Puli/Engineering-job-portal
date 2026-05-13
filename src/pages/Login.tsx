import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid Credentials. Please Register.");
      navigate("/register");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <input placeholder="Email" autoComplete="off"
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)} />


        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}