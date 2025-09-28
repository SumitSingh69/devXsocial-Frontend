import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [midName, setMidName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
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
      dispatch(addUser(result.data.data));
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
      //set the error here
      setError(err.response.data);
    }
  };
  const handleSignUp = async () => {
    try {
      const result = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          midName,
          lastName,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(result.data.data);
      dispatch(addUser(result.data.data));
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mt-30 flex  w-full justify-center items-center">
      <div className="card w-96 bg-slate-600 shadow-sm">
        <div className="card-body">
          {!isLogin && (
            <>
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                placeholder="enter first name here"
                value={firstName}
                className="input"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="email">middle name</label>
              <input
                type="text"
                placeholder="enter middle name here"
                value={midName}
                className="input"
                onChange={(e) => setMidName(e.target.value)}
              />
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                placeholder="enter last name here"
                value={lastName}
                className="input"
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
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
          <p className="text-red-400">{error}</p>
          <div className="mt-6">
            <button
              className="btn btn-primary btn-block"
              onClick={isLogin ? handleLogin : handleSignUp}
            >
              {isLogin ? "login" : "sign up"}
            </button>
          </div>
          <p
            className=" btn  btn-block mt-6"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "new user ? sign up here"
              : "already a user ? click here"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
