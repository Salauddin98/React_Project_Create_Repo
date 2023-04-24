import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const fromSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(userName, email, password, confirmPassword);
    setError("");

    if (password !== confirmPassword) {
      setError("Your Password did not match !!");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters or longer !!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div>
      <form className="signup-form" onSubmit={fromSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            minLength="8"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>{" "}
        </p>

        <h4 className="error">{error}</h4>
      </form>
    </div>
  );
};

export default SignUp;
