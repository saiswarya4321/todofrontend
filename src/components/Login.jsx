import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../styles/Login.css"; // Import custom styles
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosinstance } from "../axios/axiosinstance";
import { saveuser } from "../redux/features/userSlice";
import {Link} from 'react-router-dom'

export default function Login() {
  const navigate=useNavigate();
 const dispatch =useDispatch();
 const [values,setValues]=useState({
  username:"",password:""
 })
 

 const onSubmit=()=>{
  axiosinstance
    .post("/auth/login", values)
    .then((res) => {
      console.log("Login successful:", res.data);
      dispatch(saveuser({ token: res.data.token }))
      //dispatch(saveuser(res.data.user))
      navigate("/")
    })
    .catch((error) => {
      console.error("Login failed:", error.response?.data || error.message);
    });
  
 }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="p-4 shadow rounded bg-white" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>
       
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control"
              onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={onSubmit}>
            Login
          </button>
          <div>New user<Link to={"/signup"}><span>Sign up</span></Link></div>
      </div>
       
    </div>
  );
}
