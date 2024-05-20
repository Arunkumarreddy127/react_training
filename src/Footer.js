import './App.css';
import React from 'react';

class Footer extends React.Component{
    render()
    {
      return(
        <div className='container'>
          <div className='row p-2 justify-content-center bg-info'> 
            Copyright @2024
          </div>
        </div>
      )
    }
  }

  export default Footer;