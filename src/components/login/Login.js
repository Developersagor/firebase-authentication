import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      alert("Login Succesfull");
      navigate("/home");
    } catch (e) {
      setError("Wrong email or password");
    }
  };
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2 className="form-heading">Please Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <span
            style={{
              fontSize: "1rem",
              marginTop: "1.5rem",
              color: "red",
            }}
          >
            {error}
          </span>
          <h2 className="altText">
            Have no account <Link to="/register">Register</Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
