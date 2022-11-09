import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

  const { id } = useParams();
  const { product, setProduct } = useState([]);
  const { loading, setLoading } = useState(false);

  useEffect(() => {
    const getProduct = async () =>{
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      // const response = await fetch(`http://localhost:5000/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    
    }
    
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <p className='loading'>Loading......</p>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className='col'>
          <img src={product.image} alt={product.title} />
        </div>
        <div className='col'>
          <h2>{product.title}</h2>
          <span>{product.category}</span>
        </div>
      </>
    );
  };

  return (
    <div className='product'>
      {loading ? <Loading /> : <ShowProduct />}
    </div>
  );
};

export default Product;