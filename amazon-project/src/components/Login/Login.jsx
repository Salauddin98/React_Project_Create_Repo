import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const loginUserSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    setSuccess("");

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        setSuccess("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={loginUserSubmit}>
        <div className="input-box">
          <label htmlFor="Email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="submit-box">
          <button type="submit">Sign In</button>
        </div>
        <p style={{ textAlign: "center" }}>
          New to Amazon? <Link to="/register">Sign up</Link>
        </p>
        <span style={{ textAlign: "center" }}>
          <h4 style={{ color: "green" }}>{success}</h4>
          <h4 style={{ color: "red" }}>{error}</h4>
        </span>
      </form>
    </div>
  );
};

export default Login;
