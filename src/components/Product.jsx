// import { response } from 'express';
import React,  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCart } from '../redux/action';

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(data);
  const [loading, setLoading] = useState(data);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () =>{
      setLoading(true);
       await fetch(`http://localhost:5000/products/${id}`)
        .then(response => response.json())  
        .then(result => {
            const fetchedProduct = result;
            console.log('getting results:',fetchedProduct);
            setProduct(fetchedProduct);
            setLoading(false)
        });
    }
    
     getProduct();
  }, [id]);
  
  const Loading = () => {
    return (
      <>
        <p className='loading'>Loading Product......</p>
      </>
    );
  };

  const ShowProduct = () => {
    console.log('show product:: ', product);
    return (
      <>
        <div className='col'>
          checking...
          <img src={product.image} alt={product.title} />
        </div>
        <div className='col'>
          <h2>{product.title}</h2>
          <span>{product.category}</span>
          <p>Rating: {product.rating && product.rating.rate}</p>
          <p>{product.description}</p>
          <h2> $ {product.price}</h2>
          <button className='add' onClick={() => addProduct(product)}>Add to Cart</button>
        </div>
      </>
    );
  };

  return (
    <div className='product'>
      <h1>Product Details</h1><hr/>
      <div className='display-product'>
        {!Loading ? <Loading /> : <ShowProduct /> }
     </div>
  </div>
  );
};

export default Product;