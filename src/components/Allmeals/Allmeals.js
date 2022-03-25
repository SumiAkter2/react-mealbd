import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Allmeals.css'
const Allmeals = () => {
    const [meals, setMeals]=useState([]);
const [cart, setCart] = useState([]);
    useEffect( ()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals));
   
        
    },[])

    const handleDetails =(meal)=>{
        console.log('hi',meal);
        
        const newCart = [...cart,meal]
        setCart(newCart);
    }

    return (
        <div >
      <div className='d-flex body gap-4'>
      <div className='all-meals '>
         
         {
             meals.map(meal=><Meals 
                key={meal.idMeal}
                 meal={meal}
                 handleDetails={handleDetails}
                 ></Meals>)
         }
</div>
<div className="cart-container  ">
<div className="cart-text">
<h5>Description</h5>
 <h5>Total: {cart.length}</h5>
 
</div>
</div>
      </div>
        </div>
    );
};

export default Allmeals;