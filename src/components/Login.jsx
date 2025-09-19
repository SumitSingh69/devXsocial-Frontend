import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
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
