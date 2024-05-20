import './App.css';
import React from 'react';

class Header extends React.Component{
    render()
    {
      return(
        <div className='container'>
          <div className='row p-4 justify-content-center bg-warning'> 
            Welcome to My Website!!
          </div>
        </div>
      )
    }
  }

  export default Header;