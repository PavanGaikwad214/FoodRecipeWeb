import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({setSearch}) => {
  return (
    <div className='navbar'>
     <nav className='nav'>
        <article className='navart'>
          <Link to = {'/'}>Home</Link>
          <input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder='Search Food' />
        </article>
     </nav>
    </div>
  )
}

export default Navbar
