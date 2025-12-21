import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const [openeye, setOpen] = useState(false);

  const OpenHandle = () => {
    setOpen(!openeye);
  };

  return (
    <div className="register">
      <form action="" className="register-form">
        <h1> Register Now </h1>
        <input type="text" placeholder="enter full name" required />
        <input type="email" placeholder="enter email" required />
        <div className="pass">
          <input type={openeye ? "password" : "text"} placeholder="password" required/>
          <div onClick={OpenHandle} className="eye_icon">
            {openeye ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <div className="pass">
          <input type={openeye ? "password" : "text"} placeholder="crrocet password" required/>
          <div onClick={OpenHandle} className="eye_icon">
            {openeye ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <div className="check">
          <input type="checkbox" />
          <Link className="check_link">Condition</Link>
        </div>

        <button className="register_button">Regiter now</button>
        <p>Lorem ipsum dolor, sit amet . Veritatis, laborum.</p>

        <div className="Log-Reg">
          <p>Allrady have a account:</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
