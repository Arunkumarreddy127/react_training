import { useParams } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';

// Still need to be done
const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/' + id)
      .then(res => res.json())
      .then(
        (result) => {
          alert(result);
          console.log(result)
          setData(result);
        }
      )
  })
alert('hi' + data.id)
  return (
    <div>
      <h2>Product</h2>
      <div>
        {/* <h5>{data.title}</h5>
        <p>{data.description}</p> */}
      </div>
    </div>
  )

}

export default Product;