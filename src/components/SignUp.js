import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../styles/SignUp.css";

const SignUp = props => {

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/auth/register", credentials)
      .then(res => {
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="signup-div">
      <section className="form">
      <form onSubmit={register}>
      <h1 className="form-title">Username:</h1>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <h1 className="form-title">E-mail:</h1>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <h1 className="form-title">Password:</h1>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
      </section>
    </div>
  );
};

export default SignUp;
