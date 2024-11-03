import React, { Fragment, useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleInputs(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/login", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <Fragment>
      <div className="login-container">
        <form onSubmit={(e) => handleInputs(e)}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input type="submit" value="Submit" />
        </form>
        {/* <button>Submit</button> */}
      </div>
    </Fragment>
  );
};

export default Login;
