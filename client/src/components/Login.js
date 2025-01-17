import React, { useState } from "react";
import axios from "axios"

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [credentials, setCredentials] = useState({username: "", password: ""})

const handleChange = e => {
  setCredentials({ ...credentials, [e.target.name]: e.target.value });
};

const login = e => {
  e.preventDefault();
  axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      props.history.push("/protected");
    })
    .catch(err =>
      console.log(err.message)
    );
};
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;