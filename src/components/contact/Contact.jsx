import { useEffect, useState } from 'react';
import './contact.css';
import transitions from '@material-ui/core/styles/transitions';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    setMessage(true);

  };

  useEffect(() => {
    message && setTimeout(() => setMessage(false), 3000);
  }, [message])

  return (
    <div className="contact" id='contact'>
      <div className="cLeft">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="cRight">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}
        >
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span className='submit-success'
          >Thanks for submit!</span>}
        </form>
      </div>
    </div>
  )
}
