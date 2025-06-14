import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Home = ({search}) => {
    const[data,setData]=useState([])
    const[data2,setData2]=useState([])

    useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then(res=>res.json())
      .then(d=>setData2(d.meals))
    },[data2])


    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res=>res.json())
        .then(d=>setData(d.categories))
    },[data]);

    const navigate = useNavigate()
    
  return (
    <div className='Home'>
      <Header/>
        <h1 id='cat'>Categories:-</h1>
        <section className='HomeSec'>
     {data.map((item)=>{
        return(
             <div className='homediv' key={item.idCategory}>
                <img src={item.strCategoryThumb} onClick={()=>navigate('/about',{state:{ item}})} alt="" style={{height:'250px', width:'250px'}} />
                <p>{item.strCategory}</p>
            </div>
        )
        
     })}
     </section>


     <h1 id='bat'>Meals:-</h1>
        <section className='HomeSec'>
     {data2.map((item)=>{
        return(
             <div className='homediv' key={item.idMeal}>
                <img src={item.strMealThumb} onClick={()=>navigate('/aboutmeals',{state:{ item}})} alt="" />
                <p>{item.strMeal}</p>
            </div>
        )
        
     })}
     </section>
    </div>
  )
}

export default Home
