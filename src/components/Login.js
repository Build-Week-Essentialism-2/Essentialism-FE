import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
        localStorage.setItem("token", res.data.payload);
        props.history.push("/home");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        Username:
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
