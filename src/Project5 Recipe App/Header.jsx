import { useEffect, useState } from "react"
import './Header.css'
const Header = () => {
    const[randamfood,setRandamfood]=useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>res.json())
        .then(d=>setRandamfood(d.meals))
    },[])
  return (
    <div className="Header">
      {
        randamfood.map((item)=>{
            return(
                <section className="Hero" style={{display:'flex',justifyContent:'space-evenly', alignItems:'center', marginTop:'10px', height:'400px'}} key={item.idMeal}>
                    <div className="Header1">
                        <h2 className="HeroTitle" style={{marginBottom:'10px'}}>Today Special</h2>
                        <h2 style={{textAlign:'center'}}><span className="OrangeText">{item.strMeal}</span></h2>
                        <h2 className="HeroSubtitle" style={{marginTop:'20px'}}>{item.strCategory}</h2>
                    </div>
                    <div>
                       <img src={item.strMealThumb} height={'300px'} width={'300px'} style={{borderRadius:'10%',}}></img>
                    </div>
                </section>
            )

        })
      }
    </div>
  )
}

export default Header