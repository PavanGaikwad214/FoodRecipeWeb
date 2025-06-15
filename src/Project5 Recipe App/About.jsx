import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './About.css'; // Add this line

const About = () => {
  const location = useLocation();
  const specificFood = location.state.item;
  const navigate = useNavigate();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${specificFood.strCategory}`)
      .then((res) => res.json())
      .then((d) => setMeals(d.meals));
  }, []);

  return (
    <div className="about">
      <div className="about-content">
        <img className="about-img" src={specificFood.strCategoryThumb} alt={specificFood.strCategory} />
        <p className="about-desc">{specificFood.strCategoryDescription}</p>
      </div>

      <h1 className="related-heading">Related Food:</h1>
      <section className="related-meals">
        {meals.map((item) => (
          <div className="related-card" key={item.idMeal}>
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              onClick={() => navigate('/aboutmeals', { state: { item } })}
              className="related-img"
            />
            <p className="related-name">{item.strMeal}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
