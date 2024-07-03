import React from "react";
import "./disease.css";
import { useLocation } from "react-router-dom";

export default function AnalysisResult() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const data = query.get("data");
  return (
    <body>
      <div class="serv-title">disease</div>
      <div className="container">
        <h1>Analysis Result</h1>
        <div className="result">
          <p className="disorder-label">Your disorder is:</p>
          <div className="model-output">{data}</div>
        </div>
        <button
          onClick={() => (window.location.href = "./help")}
          className="login-button"
        >
          Things you should know
        </button>{" "}
        <br></br>
        <button
          onClick={() => (window.location.href = "./info")}
          className="login-button"
        >
          How can i help myself?
        </button>
      </div>
    </body>
  );
}
