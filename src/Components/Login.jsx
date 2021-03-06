import React,{ useState }  from "react";
import { Link }  from "react-router-dom";
import { useHistory } from "react-router-dom";

const loginUrl = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";



const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const onFormSubmit = (event)=>{
    event.preventDefault();
  const userLogin = {
    username: username,
    password: password,
  };

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
   history.push("/profile")
  })
  .catch(console.error)
  };

  const updateUsername = (event) => setUserName(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);  

  return (
    <div className="loginpage">
      <p className="logword">LOGIN</p>
      <form onSubmit={onFormSubmit}>
        <label className="username">
          Username:
          <input type="text" value={username} onChange={updateUsername} />
        </label>
        <label className="password">
        Password:
          <input type="text" value={password} onChange={updatePassword} />
        </label>
        <button type="submit">Enter</button>
      </form>

      <Link to="/register">Don't have an account? Register Here!</Link>
    
</div>

  );

};

export default Login;

