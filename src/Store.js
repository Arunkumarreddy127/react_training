import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import React from 'react';

class Store extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }

    componentDidMount() {
        fetch("https://dummyjson.com/products")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                items: result.products
              });
            }
          )
      }
    
    render(){
        const { items } = this.state;
    return(
        <div className='container'>
            <h2>Welcome to our Store</h2>
            <p>Please find below the our best products for your shopping!!</p>
            <div className='row'>
                {items.map(item => (
                    <div className='col-3 border'>
                        <Link to={`/product/${item.id}`} className='text-dark'>
                            <img className='w-100' src={item.thumbnail}/>
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
  }
}

  export default Store;