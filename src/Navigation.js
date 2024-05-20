import './App.css';
import React from 'react';
import {NavLink} from "react-router-dom"

class Navigation extends React.Component{
    render()
    {
      return(
        <div className='container'>
          <div className='row p-2'> 
            <div className='col-3'>
            <NavLink to="/home"> Home </NavLink>
            </div>
            <div className='col-3'>
            <NavLink to="/about-us"> About Us </NavLink>
              
            </div>
            <div className='col-3'>
            <NavLink to="/store"> Store </NavLink>
            </div>
            <div className='col-3'>
            <NavLink to="/contact-us"> Contact Us </NavLink>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Navigation;