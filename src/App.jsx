import './app.css';
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu';
import { useState } from 'react';


function App() {

  const [state, setState] = useState(false);

  return (
    <div className="app">
      <Topbar state={state} setState={setState} />
      <Menu state={state} setState={setState} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
