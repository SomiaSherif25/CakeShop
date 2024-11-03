import React, { Fragment, useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  // }, []);
  function handleInputs(e) {
    e.preventDefault();
    
    axios.post("http://127.0.0.1:8000/api/register", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <Fragment>
      <div className="register-container">
        <form onSubmit={(e) => handleInputs(e)}>
          <input
            type="text"
            placeholder="UserName"
            name="uName"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
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
           <input type='text' placeholder='Confirm Password' name='confirmPassword'/> 
         <input type='text' placeholder='Mobile' name='mobile'/>  
          <input type="submit" value="Register" />
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
