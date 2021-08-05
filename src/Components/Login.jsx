import React,{ useState }  from "react";
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
const exampleLogin = {
  userName: "SpongeBob",
  password: "KrabbyPatty"
};


const Login = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event)=>{
    event.preventDefault();
  }

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
    </div>
  )


}

export default Login
// User should be able to register

