import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux"; // Get token from Redux
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const navigate=useNavigate();
  const token= useSelector((state) => state.auth); // Get JWT token
  const tok=token.auth?.token;
  console.log(tok)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    if (!tok)return alert("You must be logged in to add a todo");
   

    try {
      await axios.post(
        "http://localhost:5006/api/todos",
        { title },
        {
          headers: { Authorization: `Bearer ${tok}` }, // Send token in headers
        }
      );

      alert("Todo added successfully!");
      setTitle(""); // Clear input field
    } catch (error) {
      console.error("Error adding todo:", error.response?.data || error.message);
      alert("Failed to add todo: " + (error.response?.data?.error || "Unauthorized"));
    }
  };

  return (
    <div className="container mt-4">
    <div className="card p-4 shadow-lg">
      <h2 className="text-center text-primary mb-3">Add a New Todo</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          required
        />
        <button type="submit" className="btn btn-success">Add Todo</button>
      </form>
    </div>
  </div>
  );
};

export default AddTodo;
