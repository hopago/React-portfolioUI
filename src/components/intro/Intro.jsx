import './intro.css';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "Designer", "Content Creator"],
      backDelay: 700,
      typeSpeed: 75,
      backSpeed: 75,
    });

  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="iLeft">
        <div className="imgContainer">
          <img src="assets/man.jpeg" alt="" />
        </div>
      </div>
      <div className="iRight">
        <div className="wrapper">
          <h2>Hi, there</h2>
          <h1>I'm Hojun Choi</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
        </div>
      </div>
    </div>
  )
}
