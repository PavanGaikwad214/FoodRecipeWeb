import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate('/search', { state: { query: query.trim() } });
    }
  };

  return (
    <div className='navbar'>
      <nav className='nav'>
        <article className='navart'>
          <Link to="/">Home</Link>
          <input
            type="search"
            placeholder="Search Food"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </article>
      </nav>
    </div>
  );
};

export default Navbar;
