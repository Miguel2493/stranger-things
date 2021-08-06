import React,{ useState }  from "react";
import { Link }  from "react-router-dom";

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

const loginUrl = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT"


const exampleLogin = {
  userName: "SpongeBob",
  password: "KrabbyPatty"
};


const Login = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event)=>{
    event.preventDefault();
    const userLogin={
      userName,
      password,
    };


  const loginVerification = loginUrl + "/users/login";
  fetch(loginVerification, {
    method: "POST",
    body: JSON.stringify(userLogin),
  }).then((res) => console.log ("You're now logged in!", res))
  };


  const updateUsername = (event) => setUserName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div>
      <p>LOGIN</p>
      <form onSubmit={onFormSubmit}>
        <label>
          Username:
          <input type="text" value={userName} onChange={updateUsername} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>
        <button type="submit">Submit Form</button>
      </form>

      <Link to="/register">Register</Link>
    
</div>

  )

};





export default Login
// User should be able to register

