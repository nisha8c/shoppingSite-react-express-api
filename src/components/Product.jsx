import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCart } from '../redux/action';

const Product = () => {

  const { id } = useParams();
  const { product, setProduct } = useState([]);
  const { loading, setLoading } = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () =>{
      setLoading(true);
      const response = await fetch(`http://localhost:5000/products/${id}`);  
      setProduct(await response.json());
      setLoading(false);
    }
    
    getProduct();
  },[id, setLoading, setProduct]);


  const Loading = () => {
    return (
      <>
        <p className='loading'>Loading......</p>
      </>
    );
  };

  const ShowProduct = () => {
    console.log('product:: ', product);
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
      {!product ? <Loading /> : <ShowProduct />}
    </div>
  );
};

export default Product;
