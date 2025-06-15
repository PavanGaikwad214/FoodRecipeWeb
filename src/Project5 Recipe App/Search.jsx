import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Search = () => {
  const [meals, setMeals] = useState([]);
  const location = useLocation();
  const query = location.state?.query || '';
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => {
          if (data.meals) {
            setMeals(data.meals);
          } else {
            setMeals([]);
          }
        });
    }
  }, [query]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Results for: <span style={{ color: 'orange' }}>{query}</span></h1>

      {meals.length > 0 ? (
        <div className="HomeSec">
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
        </div>
      ) : (
        <p style={{ marginTop: '20px' }}>No meals found.</p>
      )}
    </div>
  );
};

export default Search;
