import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App"

// define navbar





function About(){
  return (
    <div>
      <h1>This is my about components</h1>
    </div>
  )
}


// Pages defination



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
