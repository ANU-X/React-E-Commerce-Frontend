import logo from "../../assets/logo.webp";
import cart from "../../assets/cart_icon.png";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [mobileManu, setManu] = useState(false)

  const MobiManuHand = ()=>{
    setManu(!mobileManu)
  }

  const naviget = useNavigate()

  const redirectLogin = ()=>{
    naviget('/login')
  }


  return (
    <div className="navSticky">
      <nav className="NavbarStyle">
        <div className="navLog">
          <Link to='/'> <img src={logo} alt="logo" height={50} /> </Link>
        </div>
        <ul className="navManu">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/Men"}
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              Men
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/women"
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              Women
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/kids"
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              Kids
            </NavLink>
          </li>
        </ul>
        <div className="navButon">

            <button onClick={redirectLogin}>Login</button>

          <NavLink to="/cart">
            <img src={cart} alt="cat" height={30} />
          </NavLink>
          <div className="nav-cart-count">2</div>
        </div>

        {/* -------mobile responsive---------- */}
        <div>
          <button onClick={MobiManuHand} className="mobileManu">
            {
              mobileManu ? <IoClose/> : <FaBars/>
            }
          </button>
          <nav>
        <ul onClick={()=>{setManu(false)}} className={`mobileManu-nav ${mobileManu ? 'activebar': 'hiddenbar'}`}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/Men"}
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              Men
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/women"
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              Women
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/kids"
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              Kids
            </NavLink>
          </li>
        </ul>            
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
