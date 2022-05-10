import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

const linkStyle = {
  dislplay : "inline-block",
  width : '50px',
  padding : '12px',
  margin : "0 6px 6px",
  background : "blue",
  textDecoration : 'none',
  color : 'white'
}

// define navbar

function Navbar(){
  return (
    <div>
      <NavLink 
        to='/'
        exact
        style={linkStyle}
        activeStyle = {{background : 'darkblue'}}
      >
        Home
      </NavLink>

      {/* for about  */}

      <NavLink 
        to='/about'
        exact
        style={linkStyle}
        activeStyle = {{background : 'darkblue'}}
      >
        About
      </NavLink>

      <NavLink 
        to='/login'
        exact
        style={linkStyle}
        activeStyle = {{background : 'darkblue'}}
      >
        Login
      </NavLink>
    </div>
  )
}

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
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route >
      <Route exact path='/login'>
        <Login />
      </Route>
    </Switch>
  </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
