import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [toastMessage, setToastMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    if (!username || !password) {
      setToastMessage("Please fill in both username and password fields.");
      return;
    }

    await axios
      .post(
        "http://localhost:5000/login",
        { username: username, password: password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) window.location.href = "/services";
      });
  };

  return (
    <div className="container">
<<<<<<< HEAD
      <h1 className="sers-title">Login</h1>
=======
      <h1 className="sers">Login</h1>
>>>>>>> 97859a541ce86ae9a91b58eaac1ab3bab380acda
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="button">
          Log In
        </button>
      </form>
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  );
}
