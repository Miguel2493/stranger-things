import React,{ useState }  from "react";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const onFormSubmit = (event)=>{
      event.preventDefault();
    }
  
    const updateUsername = (event) => setUserName(event.target.value);
    const updatePassword = (event) => setPassword(event.target.value);

    return (
        <div>
          <p>Register</p>
          <form onSubmit={onFormSubmit}>
            <label>
              New Username:
              <input type="text" value={userName} onChange={updateUsername} />
            </label>
            <label>
              New Password:
              <input type="text" value={password} onChange={updatePassword} />
            </label>
            <button type="submit">Submit Form</button>
          </form>
    
        
    </div>
    
      )
    
    }
  
    
    
  
   
export default Register;