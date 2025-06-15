import { useEffect, useState } from "react";
import './Header.css';

const Header = () => {
  const [randomFood, setRandomFood] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(d => setRandomFood(d.meals));
  }, []);

  return (
    <div className="Header">
      {randomFood.map((item) => (
        <section className="Hero" key={item.idMeal}>
          <div className="Header1">
            <h2 className="HeroTitle">Today Special</h2>
            <h2><span className="OrangeText">{item.strMeal}</span></h2>
            <h2 className="HeroSubtitle">{item.strCategory}</h2>
          </div>
          <div className="HeroImageWrapper">
            <img src={item.strMealThumb} alt={item.strMeal} className="HeroImage" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Header;
