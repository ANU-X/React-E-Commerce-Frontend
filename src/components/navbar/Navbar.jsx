import logo from "../../assets/logo.webp";
import cart from "../../assets/cart_icon.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navSticky">
      <nav className="NavbarStyle">
        <div className="navLog">
          <img src={logo} alt="logo" height={50} />
          <p>Shopping</p>
        </div>
        <ul className="navManu">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "ActiveColor" : "NavLi")}
            >
              {" "}
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
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/cart">
            <img src={cart} alt="cat" height={30} />
          </NavLink>
          <div className="nav-cart-count">2</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
