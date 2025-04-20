import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
const About = () => {
    const location = useLocation()
    const specificFood = location.state.item
    console.log(specificFood);

    const navigate = useNavigate()


    const[meals,setMeals]=useState([])
    useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${specificFood.strCategory}`)
      .then(res=>res.json())
      .then(d=>setMeals(d.meals))
    },[])
  return (
    <div className='about'>
      <div className="about_content" style={{ marginTop:'50px', marginBottom:'50px'}}>
        <div className="img" style={{height:'60%', width:'100%', alignItems:"center", justifyContent:'center'}}>
             <img src={specificFood.strCategoryThumb} style={{height:'300px', width:'300px', marginLeft:'40%'}}/><img/>         
            <p style={{ textAlign:'justify', width:'50%',marginLeft:'25%'}}>{specificFood.strCategoryDescription}</p>
        </div>
      </div>
      <h1>Related Food :-</h1>
      <section className='HomeSec'>
     {meals.map((item)=>{
        return(
             <div key={item.idMeal}>
                <img  onClick={()=>navigate('/aboutmeals',{state:{ item}})} src={item.strMealThumb} style={{height:'200px', width:'250px', color:'white', objectFit:'cover', marginTop:'25px',borderRadius:'50%'}} />
                <p>{item.strMeal}</p>
            </div>
        )
        
     })}
     </section>
    </div>
  )
}

export default About
