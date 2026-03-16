import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast"

const Register = () => {
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [conformpassword, setConformPassword] = useState(false)
  const [user, setUser] = useState({ name: "", email: "", password: "" ,correctpassword: "" });

  const navigetRout = useNavigate()

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlersubmit = async (e) => {
    e.preventDefault();
    if(user.password !== user.correctpassword){
      toast.error("password and confirm password muse be same")
      return
    }

    try {
      const res = await axios.post("http://localhost:3000/api/user/reg", user);
      if(res.data.error){
        toast.error(res.data.message)
      }
      if(res.data){
        toast.success(res.data.message || 'register sussessfull');
        setUser({ name: "", email: "", password: "", correctpassword: "" });
      }

      setTimeout(()=> navigetRout('/login'), 2000);

    } catch (error) {
      toast.error(error.response.data.message || "register faild");
    }
  };
  return (
    <div className="register">
      <form onSubmit={handlersubmit} action="" className="register-form">
              <h1> Register Now </h1>
                <div className="pass">
                  <label htmlFor="name">Enter Your Full Name </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="enter full name"
                      onChange={handleInput}
                      value={user.name}
                      required
                    />
                </div>

                <div className="pass">
                  <label htmlFor="email">Enter Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleInput}
                      value={user.email}
                      placeholder="enter email"
                      required
                    />
                </div>

                <div className="pass">
                  <label htmlFor="password">Enter Your Password</label>
                  <input
                    type={passwordOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleInput}
                    value={user.password}
                    placeholder="password"
                    required
                  />
                  <div onClick={()=>setPasswordOpen(preve => !preve)} className="eye_icon">
                    {passwordOpen ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>

                <div className="pass">
                  <label htmlFor="conformpassword">Enter Conform Password</label>
                  <input
                    type={conformpassword ? "text" : "password"}
                    name="correctpassword"
                    id="conformpassword"
                    value={user.correctpassword}
                    onChange={handleInput}
                    placeholder="crrocet password"
                    required
                  />
                  <div onClick={()=>setConformPassword(preve => !preve)} className="eye_icon">
                    {conformpassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>

                <div className="check">
                  <input type="checkbox" />
                  <Link className="check_link">Condition</Link>
                </div>

                <button type="submit" className="register_button"> Register </button>

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
