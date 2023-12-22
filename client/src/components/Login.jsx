import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./layouts/style.css";
import { useGlobalContext } from "../store/auth";

const Login = () => {

  const {storetokenInLS}=useGlobalContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const URL = "http://localhost:5000/api/auth/login";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form", response);
      if (response.ok) {
        alert("Login Successful");
        const res_data=await response.json();
        // localStorage.setItem("token",res_data.token);
        storetokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        navigate("/main");
      } else {
        alert("invalid credential");
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="login-heading title">Quiz Login</div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              {" "}
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email..."
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="submit-btn">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="newTo__account">
            <span>
              Don't have an account? <Link to={"/register"}>Sign Up</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
