import './portfolioList.css';


export default function PortfolioList({ title, active, setSelected, id }) {



  return (
    <li 
      className={ active ? "portfolioList pActive" : "portfolioList" }
      onClick={() => setSelected(id)}
    >
        {title}
    </li>
  )
}
