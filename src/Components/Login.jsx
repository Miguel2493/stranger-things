import React,{ useEffect, useState }  from "react";
import { Link }  from "react-router-dom";
import { useHistory } from "react-router-dom";




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

const loginUrl = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";

// const exampleLogin = {
//   username: "SpongeBob",
//   password: "KrabbyPatty",
// };


const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const redirect = ()=>{
    history.push("/src/Components/Home.jsx")
  };
  

  const onFormSubmit = (event)=>{
    event.preventDefault();
  const userLogin={
    username: username,
    password: password,
  };

  function LoginCompleted(){
    let history = useHistory();
    function handleClick(){
      history.push("/Home")
    }
  }

  const loginVerification = loginUrl + "/users/login";
  fetch(loginVerification, {
    method: "POST",
    headers:{
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({user:userLogin}),
  }).then((response) => {
    return response.json();
  }).then((result) => {
    console.log(result.data.token);
    window.localStorage.setItem('token',result.data.token)
  })
  .catch(console.error)
  };

  const updateUsername = (event) => setUserName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div>
      <p>LOGIN</p>
      <form onSubmit={onFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
        <label>
        Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>
        <button onClick={redirect} type="submit">Enter</button>
      </form>

      <Link to="/register">Register</Link>
    
</div>

  )

};

export default Login
// User should be able to register

