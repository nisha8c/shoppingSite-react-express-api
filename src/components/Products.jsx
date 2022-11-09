import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(data);

  console.log('filter: ', filter);


  useEffect(() => {
    const getProducts = async () =>{
      setLoading(true);
       // const response = await fetch('https://fakestoreapi.com/products');
       await fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(result => {
            const fetchedProducts = result;
            setData(fetchedProducts);
            setFilter(fetchedProducts);
            setLoading(false)
        });
    }
    
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <p className='loading'>Loading......</p>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = () => data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className='buttons'>
          <button className='btn' type='submit' onClick={() => setFilter(data)}>All</button>
          <button className='btn' type='submit' onClick={() => filterProduct("men's clothing")}>Men</button>
          <button className='btn' type='submit' onClick={() => filterProduct("women's clothing")}>Women</button>
          <button className='btn' type='submit' onClick={() => filterProduct('jewelery')}>Jewel</button>
          <button className='btn' type='submit' onClick={() => filterProduct('electronics')}>Electronics</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className='cards' key={product.id}>
                <div className='card'>
                  <div className='card-header'>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className='card-body'>
                    <h3 className='title'>{product.title}</h3>
                    <div className='other'>
                      <span>{product.rating.rate} </span>
                      <span> ${product.price}</span>
                    </div>
                  </div>
                  <div className='card-footer'>
                    <Link to={`/products/${product.id}`} className='buyNow'>Buy Now</Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className='products'>
      <h1>Latest Products</h1><hr/>
      <div className='display-products'>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;