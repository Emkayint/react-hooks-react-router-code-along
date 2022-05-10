import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import { Switch } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

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