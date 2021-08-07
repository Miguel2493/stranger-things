import React,{ useState }  from "react";

// const loginUrl = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";

// const exampleLogin = {
//     username: "SpongeBob",
//     password: "KrabbyPatty"
//   };

//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   const onFormSubmit = (event)=>{
//     event.preventDefault();
//   const userLogin={
//     username: username,
//     password: password,
//   };

//   const loginVerification = loginUrl + "/users/login";
  
//   fetch(loginVerification, {
//     method: "POST",
//     headers:{
//       'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({user:userLogin}),
//   }).then(response => response.json())
//   .then(result => {
//     console.log(result);
//   })
//   .catch(console.error)
//   };


//   const updateUsername = (event) => setUserName(event.target.value);
//   const updatePassword = (event) => setPassword(event.target.value);

const Messages = () => {
    return (
      <div>
        <h1>Messages</h1>
      </div>
    )  
  }
  
export default Messages;