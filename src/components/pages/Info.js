import React from 'react';
import './info.css';

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-item">
        <h2>National Institute of Mental Health (NIMH)</h2>
        <p>Offers comprehensive information on mental health disorders, treatment options, and research findings.</p>
        <a href="https://www.nimh.nih.gov/">Visit Website</a>
      </div>
      <br></br>
      <div className="info-item">
        <h2>Mayo Clinic</h2>
        <p>Provides extensive resources on mental health conditions, symptoms, causes, and treatment options.</p>
        <a href="https://www.mayoclinic.org/">Visit Website</a>
      </div>
      <div className="info-item">
        <h2>Mind</h2>
        <p>A mental health charity providing advice and support to empower anyone experiencing a mental health problem.</p>
        <a href="https://www.mind.org.uk/">Visit Website</a>
      </div>
      <div className="info-item">
        <h2>Psycom</h2>
        <p>Offers reliable information and advice on mental health conditions, treatments, and self-help strategies.</p>
        <a href="https://www.psycom.net/">Visit Website</a>
      </div>
      {/* Add more info-items for other websites */}
    </div>
  );
}

export default Info;
