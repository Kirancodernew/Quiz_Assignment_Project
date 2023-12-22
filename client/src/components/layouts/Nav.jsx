import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import QuizIcon from "@mui/icons-material/Quiz";
import { useGlobalContext } from "../../store/auth";


const Nav = () => {
  const { isLoggedIn, user } = useGlobalContext();
  useEffect(() => {
    console.log('isLoggedIn has changed:', isLoggedIn);
  }, [isLoggedIn]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse nav-container"
            id="navbarNav"
          >
            <div className="nav-left">
              <Link to={"/"} className="navbar-brand" href="#">
                <QuizIcon />
              </Link>
            </div>
            <div className="navbar-nav nav-right">
              <Link
                to={"/"}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                About
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to={"/logout"}
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Logout
                  </Link>
                  <div className=" userName">{user.username}</div>
                </>
              ) : (
                <>
                  <Link
                    to={"/register"}
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    register
                  </Link>
                  <Link
                    to={"/login"}
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Login
                  </Link>
                </>
              )}
              {/* <Link to={'/admin'} className="nav-link active" aria-current="page" href="#">Admin</Link> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
