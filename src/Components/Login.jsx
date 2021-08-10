import React, { useState } from "react";
import { Link } from "react-router-dom";

// {//this is where we will create the login
// // fetch(
// //     "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/register",
// //     {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         user: {
// //           username: "spongebob",
// //           password: "KrabbyPatty",
// //         },
// //       }),
// //     }
// //   )
// //     .then((response) => response.json())
// //     .then((result) => {
// //       console.log(result);
// //     })
// //     .catch(console.error);
// }

const loginUrl =
  "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";

const exampleLogin = {
  username: "SpongeBob",
  password: "KrabbyPatty",
};

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const userLogin = {
      username: username,
      password: password,
    };
    const loginVerification = loginUrl + "/users/login";
    fetch(loginVerification, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { userLogin } }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  };

  const updateUsername = (event) => setUserName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div class="loginpage">
      <p class="logword"> LOGIN</p>
      <form onSubmit={onFormSubmit}>
        <label class="username">
          Username:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
        <label class="password">
          Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>
        <button type="submit">Submit Form</button>
      </form>

      <Link to="/register">Don't have an an account? Register</Link>
    </div>
  );
};

export default Login;
// User should be able to register
