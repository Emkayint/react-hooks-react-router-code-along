import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";



// define navbar





function About(){
  return (
    <div>
      <h1>This is my about components</h1>
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
