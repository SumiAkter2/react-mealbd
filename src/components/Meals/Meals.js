import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Meals.css'
const Meals = (props) => {
   const{ strMeal , strMealThumb ,strInstructions,strCategory }=props.meal;
//    console.log(props.meal);
  
   
    return (
        <div>
             <div className=" meal">
               
                 <div >
                   
                     <img className='img-fluid' src={strMealThumb}  alt="" />
                     <h1>{strMeal}</h1>
                     {/* <h2>{strCategory}</h2> */}
                     <p>{strInstructions.slice(0,150)}</p>
                     <button onClick={()=>props.handleDetails(props.meal)} className='btn'>Details
                     <FontAwesomeIcon icon={faSearch} /></button>
                  </div>
                 

                
     
               
            </div>
        </div>
    );
};

export default Meals;