import React from 'react';
import './disease.css';

export default function AnalysisResult() {
  return (
    <body>
      <div class="serv-title">disease</div>
      <div className="container">
        <h1>Analysis Result</h1>
        <div className="result">
          <p className="disorder-label">Your disorder is:</p>
          <div className="model-output">
            {/* Placeholder for model output */}
          </div>
        </div>
        <button onClick={() => window.location.href='./info'} className="login-button">How can i help myself?</button>

      </div>
  </body>
  );
}
