import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../styles/Login.css";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        console.log(res.data);
        props.history.push("/allvalues");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-div">
      <section className="form">
        <form className="form-login" onSubmit={login}>
          <h1 className="form-title">Username:</h1>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <h1 className="form-title">Password:</h1>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button className="login-button">Log In</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
