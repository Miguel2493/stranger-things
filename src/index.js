import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

fetch(
  "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/register",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: "spongebob",
        password: "KrabbyPatty",
      },
    }),
  }
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch(console.error);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
