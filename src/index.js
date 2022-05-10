import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About(){
  return (
    <div>
      <h1>This is my about components</h1>
    </div>
  )
}

function Login(){
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type='text' name = 'username' placeholder = 'username' />
        </div>
        <div>
          <input type = "password" name = "password" placeholder="password"/>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
// Pages defination


function App() {
  return (
    <>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route >
      <Route exact path='/login'>
        <Login />
      </Route>
  </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
