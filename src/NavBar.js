import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const navStyle = ({ isActive }) => ({
        color: isActive ? 'red' : 'black',
        textDecoration: isActive ? 'none' : 'underline',
        margin: isActive ? '10px' : '5px',
        fontSize: isActive ? '20px' : '15px'
    });
  return (
    <nav>
      <NavLink to="/" style={navStyle}> Home </NavLink> 
      <NavLink to="/contact" style={navStyle}> Contact Us </NavLink> 
      <NavLink to="/aboutUs" style={navStyle}> About Us </NavLink> 
      <NavLink to="/profile" style={navStyle}> Profile </NavLink>
      <NavLink to="/page" style={navStyle}> Blog </NavLink>
      </nav>
  );
}

export default NavBar;