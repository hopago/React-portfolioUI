import { useState } from 'react';
import './works.css';

export default function Works() {

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);

  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
    setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
  };

  return (
    <div className='works' id='works'>
      <div className="wSlider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        {data.map(data => {
        return (
        <div className="wContainer">
          <div className="wItem">
            <div className="wLeft">
              <div className="wLeftContainer">
                <div className="wImgContainer">
                  <img src={data.icon} alt="" />
                </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <span>Projects</span>
              </div>
            </div>
            <div className="wRight">
              <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />

            </div>
          </div>
        </div>
        )})}
      </div>
      <img src="assets/arrow.png" alt="" className='wArrow wArrow-left' onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" alt="" className='wArrow wArrow-right' onClick={() => handleClick("right")} />
    </div>
  )
}
