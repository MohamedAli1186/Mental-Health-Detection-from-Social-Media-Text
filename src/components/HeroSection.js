import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome</h1>
      <p>Discover More?
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          buttonColor= '#03d9a9'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          buttonColor= '#03d9a9'
        >
          LOGIN
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;