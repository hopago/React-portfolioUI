import { useEffect, useState } from 'react';
import './menu.css';


export default function Menu({ state, setState }) {

    const [active, setActive] = useState('');

    useEffect(() => {

        if(state === true) {
            setActive('activeMenu');
        } else if(state === false) {
            setActive('');
        }

    }, [state]);

  return (
    <div className={`menu ${state ? active : null}`} style={{transition: '0.7s'}}>
        <ul>
            <li onClick={() => setState(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setState(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={() => setState(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={() => setState(false)}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={() => setState(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
