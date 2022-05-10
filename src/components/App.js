import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import { Switch , Route} from "react-router-dom";

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

export default App