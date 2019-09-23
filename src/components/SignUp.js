import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
        // props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={register}>
        Username:
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        E-mail:
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
