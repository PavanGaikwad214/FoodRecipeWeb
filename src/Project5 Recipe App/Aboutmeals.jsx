import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import './Aboutmeals.css'; // new CSS

const Aboutmeals = ({ search }) => {
  const location = useLocation();
  const specificMeals = location.state.item;
  const navigate = useNavigate();
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((res) => res.json())
      .then((d) => setData2(d.meals));
  }, []);

  return (
    <div className="aboutmeals-container">
      <div className="aboutmeals-content">
        <img src={specificMeals.strMealThumb} alt={specificMeals.strMeal} className="meal-img" />
        <div className="meal-info">
          <p><span className="label">Name:</span> {specificMeals.strMeal}</p>
          <p><span className="label">Category:</span> {specificMeals.strCategory}</p>
          <p><span className="label">Area:</span> {specificMeals.strArea}</p>
          <p className="instructions">{specificMeals.strInstructions}</p>
        </div>
      </div>

      <div className="video-wrapper">
        <ReactPlayer url={specificMeals.strYoutube} width="100%" />
      </div>

      <h1 className="related-heading">Other Meals:</h1>
      <section className="HomeSec">
        {data2.map((item) => (
          <div className="homediv" key={item.idMeal}>
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="related-img"
              onClick={() => navigate('/aboutmeals', { state: { item } })}
            />
            <p>{item.strMeal}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Aboutmeals;
