import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./layouts/style.css";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const res_data=await response.json();
        console.log(res_data);
        // localStorage.setItem("token",res_data.token);
        setUser({ username: "", email: "", password: "" });
        navigate('/login');
      }
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="login-heading title">Quiz Register</div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="mb-3">
            <label htmlFor="inputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="inputUsername"
              value={user.username}
              placeholder="Enter your name"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email..."
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
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <div className="newTo__account">
            <span>
              Have an account? <Link to={"/login"}>Sign In</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
