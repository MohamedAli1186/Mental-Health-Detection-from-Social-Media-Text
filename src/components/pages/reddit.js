import React, { useState } from "react";
import "./services.css";
import Cookies from "js-cookie";

export default function WriteSomeTweets() {
  const [tweetInput, setTweetInput] = useState("");
  const [subreddit, setSubreddit] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const analyzeTweet = async () => {
    const cookieValue = Cookies.get("id");
    console.log("Cookie Value:", cookieValue);
    if (tweetInput.trim() === "") {
      setToastMessage("Please enter your tweet.");
    } else {
      const apiUrl = "http://127.0.0.1:5000/reddit?id=" + cookieValue;
      const formData = new FormData();
      formData.append("user", tweetInput);
      formData.append("subreddit", subreddit);

      const requestOptions = {
        method: "POST",
        body: formData, // Send the formData as the request body
        credentials: "include",
      };

      try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        if (response.ok) {
          console.log("Prediction:", data);
          window.location.href = "/disease?data=" + data; // Example redirect on success
        } else {
          setToastMessage("Failed to analyze the tweet. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setToastMessage("An error occurred while analyzing the tweet.");
      }
    }
  };

  return (
    <body>
      <div class="services-title">Reddit</div>
      <div className="container">
        <h1>Reddit Username & Subreddit</h1>
        <div className="input-container">
          <input
            type="text"
            value={tweetInput}
            onChange={(e) => setTweetInput(e.target.value)}
            placeholder="Enter your Reddit Username"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            value={subreddit}
            onChange={(e) => setSubreddit(e.target.value)}
            placeholder="Enter subreddit"
          />
          <div className="toast">{toastMessage}</div>
        </div>
        <button className="button" onClick={analyzeTweet}>
          fetch & analyze
        </button>
      </div>
    </body>
  );
}
