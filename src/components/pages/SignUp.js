import React, { useState } from "react";
import "./signup.css";
import axios from "axios";

export default function SignUp() {
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!username || !email || !password) {
<<<<<<< HEAD
      setToastMessage("Please fill in all fields.");
=======
      setToastMessage('Please fill in all fields.');
      return;
    }
    else{ 
      setTimeout(() => {
      window.location.href = '/login'; // Delaaaayyy
    }, 1000);
    }
>>>>>>> 97859a541ce86ae9a91b58eaac1ab3bab380acda

      return;
    } else {
      await axios
        .post(
          "http://localhost:5000/signup",
          { username: username, password: password, email: email },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          // Proceed with signup logic
          setToastMessage("Sign up successful!");
          form.reset(); //bymsa7 el kalam
          setTimeout(() => {
            window.location.href = "/services"; // Delaaaayyy
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="container">
      <h1 className="ser">Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
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
          Sign Up
        </button>
      </form>
      {toastMessage && <div className="toast">{toastMessage}</div>}
      <button
        onClick={() => (window.location.href = "./login")}
        className="login-button"
      >
        Already have an account?
      </button>
    </div>
  );
}
