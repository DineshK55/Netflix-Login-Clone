import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const data = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/dashboard");

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>

      <div className="navbar">
        <h1 className="logo">NETFLIX</h1>
      </div>

      <form
        className="login-box"
        onSubmit={handleLogin}
      >
        <h2>Sign In</h2>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email or phone number"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Sign In
        </button>

        <p className="demo-credentials">
  Demo Login:
  <br />
  Email: admin@netflix.com
  <br />
  Password: 123456
</p>

        <p className="signup-text">
          New to Netflix? <span>Sign up now.</span>
        </p>
      </form>
    </div>
  );
}

export default Login;