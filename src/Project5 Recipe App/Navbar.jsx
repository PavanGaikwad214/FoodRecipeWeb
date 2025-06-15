import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Fetch suggestions when user types
  useEffect(() => {
    if (query.trim().length > 0) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => {
          if (data.meals) {
            setSuggestions(data.meals.slice(0, 5)); // Limit to 5 suggestions
          } else {
            setSuggestions([]);
          }
        });
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate('/search', { state: { query: query.trim() } });
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (item) => {
    navigate('/aboutmeals', { state: { item } });
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <article className="navart">
          <Link to="/">Home</Link>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search Food"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            {suggestions.length > 0 && (
              <ul className="suggestions">
                {suggestions.map((item) => (
                  <li key={item.idMeal} onClick={() => handleSuggestionClick(item)}>
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <span>{item.strMeal}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      </nav>
    </div>
  );
};

export default Navbar;
