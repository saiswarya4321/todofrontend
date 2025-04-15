import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux"; // Get token from Redux

const ViewTodos = () => {
  const [todos, setTodos] = useState([]);
  const token = useSelector((state) => state.auth); // Get auth object from Redux
  const tok = token.auth?.token; // Extract JWT token

  useEffect(() => {
    if (!tok) {
      console.log("No token found, cannot fetch todos.");
      return;
    }

    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://todobackend-lgkp.onrender.com/api/todos", {
          headers: { Authorization: `Bearer ${tok}` }, // Send token in headers
        });
        setTodos(response.data); // Set todos state with fetched data
      } catch (error) {
        console.error("Error fetching todos:", error.response?.data || error.message);
      }
    };

    fetchTodos();
  }, [tok]); // Runs when the token changes

  return (
    <div className="container mt-4">
    <h2 className="text-center text-primary mb-4">Your Todos</h2>
    {todos.length === 0 ? (
      <div className="alert alert-warning text-center">No todos found. and You have to Login First</div>
    ) : (
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo._id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <span className="badge bg-success">✓</span>
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default ViewTodos;
