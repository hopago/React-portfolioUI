import { useEffect, useState } from 'react';
import './topbar.css';
import { Person, Mail } from '@material-ui/icons';


function Topbar({ state, setState }) {

  const [topClass, setTopClass] = useState('');
  const [spanClass, setSpanClass] = useState('');

  const handleClick = () => {

    if(state === true) {
      setTopClass('');
      setSpanClass('');
      setState(!state);
    } else if(state === false) {
      setTopClass('active');
      setSpanClass('active-span');
      setState(!state);
    }

  };


  return (
    <div className={`topbar ${state && topClass}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#testimonials" className='logo'>.myPortFolio</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+82 10 8721 649@</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>ghwns818@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleClick}>
            <span className={`line1  ${state && spanClass}`}></span>
            <span className={`line1  ${state && spanClass}`}></span>
            <span className={`line1  ${state && spanClass}`}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar

