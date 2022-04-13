import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      alert("Registration Succesfull");
      logout();
      navigate("/login");
    } catch (e) {
      setError("You are already registered");
    }
  };
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2 className="form-heading">Please Register</h2>
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
            <button type="submit">Register</button>
          </form>
          <span style={{ fontSize: "1rem", color: "red" }}>{error}</span>
          <h2 className="altText">
            Have an account <Link to="/login">Login</Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Register;
