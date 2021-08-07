import React, { useState } from "react";

const loginUrl =
  "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const userLogin = {
      user: {
        username,
        password,
      },
    };
    const loginVerification = loginUrl + "/users/register";
    fetch(loginVerification, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => {
        console.log("We are in?", res);
        return res.json();
      })
      .then(console.log);
  };

  const updateUsername = (event) => setUserName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div>
      <p>Register</p>
      <form onSubmit={onFormSubmit}>
        <label>
          New Username:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
        <label>
          New Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Register;
