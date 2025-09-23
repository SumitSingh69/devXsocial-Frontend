import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(result.data?.data);
      dispatch(addUser(result.data.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mt-30 flex  w-full justify-center items-center">
      <div className="card w-96 bg-slate-600 shadow-sm">
        <div className="card-body">
          <label htmlFor="email">email</label>
          <input
            type="text"
            placeholder="enter email here"
            value={email}
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            placeholder="enter password here"
            value={password}
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-6">
            <button
              className="btn btn-primary btn-block"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
