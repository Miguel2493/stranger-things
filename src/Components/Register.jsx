
import React,{ useState }  from "react";
import { useHistory } from "react-router-dom";

const loginUrl = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT"

const Register = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

  
    const onFormSubmit = (event)=>{
      event.preventDefault();
      const userLogin={
        username,
        password,
      };

    const loginVerification = loginUrl + "/users/register";
    fetch(loginVerification, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userLogin }),
    })
      .then((res) => {
        return res.json();
      }).then((result)=>{
          console.log(result)
          console.log(result.data.token);
            window.localStorage.setItem('token',result.data.token)
            history.push("/profile")
        })
        .catch(console.error)
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