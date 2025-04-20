import React from 'react'
import ReactPlayer from 'react-player'
import {useLocation,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
const Aboutmeals = ({search}) => {
    const location = useLocation()
    const specificMeals = location.state.item
    console.log(specificMeals);
    const navigate = useNavigate()
    const[data2,setData2]=useState([])

    useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then(res=>res.json())
      .then(d=>setData2(d.meals))
    },[])
  return (
    <div>
         <div className="about_content" style={{ marginTop:'50px', marginBottom:'50px'}}>
        <div className="img" style={{height:'60%', width:'100%', alignItems:"center", justifyContent:'space-around', display:'flex', flexWrap:'wrap' }}>
             <img src={specificMeals.strMealThumb} style={{height:'300px', width:'300px', marginLeft:'20%', borderRadius:'10px', objectFit:'cover'}}/><img/>         
            <p style={{ marginTop:'20px', width:'800px', color:'gray', fontWeight:300}}>
            <span style={{color:'red',fontWeight:900}}>Name</span>:{specificMeals.strMeal}
            <br /><br />
            <span style={{color:'red',fontWeight:900}}>Category</span>:{specificMeals.strCategory}
            <br /><br />
            <span style={{color:'red',fontWeight:900}}>Area</span>:{specificMeals.strArea}
            <br /><br />
            <span>{specificMeals.strInstructions}</span>
            </p>
        </div>
      </div>
      <ReactPlayer url={specificMeals.strYoutube} width={'100%'} />
      <h1 id='bat'>Meals:-</h1>
        <section className='HomeSec'>
     {data2.map((item)=>{
        return(
             <div className='homediv' key={item.idMeal}>
                <img src={item.strMealThumb} height={'250px'} width={'250px'} style={{ marginTop:'15px'}} onClick={()=>navigate('/aboutmeals',{state:{ item}})} alt="" />
                <p>{item.strMeal}</p>
            </div>
        )
        
     })}
     </section>
    </div>
  )
}

export default Aboutmeals
