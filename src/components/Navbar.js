import { NavLink } from "react-router-dom"

const linkStyle = {
  dislplay : "inline-block",
  width : '50px',
  padding : '12px',
  margin : "0 6px 6px",
  background : "blue",
  textDecoration : 'none',
  color : 'white'
}

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

export default Navbar