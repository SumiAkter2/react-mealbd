import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBowlFood } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className=" p-3 header">
                
                
              <div className='d-flex head'>
                    <FontAwesomeIcon icon={faBowlFood} />
                    <h1>MealBd</h1>
              
            
                   <div className="text">
                   <a href="/home">Home</a> 
                    <a href="/about">About</a>
                    <a href="/food">Food</a>
                    <a href="/contact">Contact</a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Header;