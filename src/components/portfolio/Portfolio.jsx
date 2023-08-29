import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.css';
import {
  featuredPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  webPortfolio,
} from '../../data';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  console.log(data);

  useEffect(() => {

    switch (selected) {

      case "featured":
        setData(featuredPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;

      case "mobile":
        setData(mobilePortfolio);
        break;
      
      case "design":
        setData(designPortfolio);
        break;

      case "content":
        setData(contentPortfolio);
        break;
      
      default:
        setData(featuredPortfolio);
        break;

    }

  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(list => (
          <PortfolioList
           title={list.title} 
           active={selected === list.id}
           setSelected={setSelected}
           id={list.id}
           key={list.id}
          />
        ))}
      </ul>
      <div id='pContainer' className="pContainer">
            {data.map(data => {
              return (
              <div className="pItem" key={data.id}>
                <img src={data.img && data.img} alt='' />
                <h3>{data.title && data.title}</h3>
              </div>
              )
            })}
      </div>
    </div>
  )
}
