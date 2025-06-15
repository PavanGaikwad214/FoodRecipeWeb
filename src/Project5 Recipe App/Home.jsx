import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Home = ({ search }) => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  // Fetch meals by first letter (search input)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      });
  }, [search]);

  // Fetch categories only once
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(res => res.json())
      .then(data => {
        if (data && data.categories) {
          setCategories(data.categories);
        }
      });
  }, []);

  return (
    <div className="Home">
      <Header />

      <h1 id="cat">Categories:</h1>
      <section className="HomeSec">
        {categories.map((item) => (
          <div className="homediv" key={item.idCategory}>
            <img
              src={item.strCategoryThumb}
              alt={item.strCategory}
              onClick={() => navigate('/about', { state: { item } })}
            />
            <p>{item.strCategory}</p>
          </div>
        ))}
      </section>

      <h1 id="bat">Meals:</h1>
      <section className="HomeSec">
        {meals.map((item) => (
          <div className="homediv" key={item.idMeal}>
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              onClick={() => navigate('/aboutmeals', { state: { item } })}
            />
            <p>{item.strMeal}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
