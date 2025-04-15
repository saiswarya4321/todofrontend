import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="fw-bold text-primary mb-3">Welcome to MyTodoApp</h1>
      <p className="text-muted fs-5 mb-4">Stay organized and manage your tasks with ease.</p>
      
      <div>
        <NavLink to="/addtodo" className="btn btn-primary btn-lg mx-2">
          Add Todo
        </NavLink>
        <NavLink to="/todosview" className="btn btn-outline-primary btn-lg mx-2">
          View Todos
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
