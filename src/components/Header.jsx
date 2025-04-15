import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearuser } from "../redux/features/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // optional for redirecting
  const user = useSelector((state) => state.auth.auth);

  const handleLogout = () => {
    dispatch(clearuser());
    navigate("/login"); // optional: redirect to login page
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          MyTodoApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addtodo">Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todosview">View</NavLink>
            </li>
            <li className="nav-item">
            <button className="btn btn-danger mb-3" onClick={handleLogout}>Logout</button>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
