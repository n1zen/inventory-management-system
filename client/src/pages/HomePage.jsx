// import dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import api from '../lib/axios.js';
import toast from 'react-hot-toast';
import { PlusIcon } from 'lucide-react';

// import components
import ProductCard from '../components/ProductCard.jsx';

// import css
import '../styles/pages/HomePage.css'

const HomePage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fectchProducts = async () => {
      try {
        const res = await api.get('/products');
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products', error);
        if(error.response.status === 429) {
          console.log('Rate limit exceeded');
        } else {
          toast.error('Error fetching products');
        }
      } finally {
        setLoading(false);
      }
    };
    fectchProducts();
  }, []);

  return (
    <div className="page-container">
      <Link to="/create-product" className="create-link card-popin">
        <PlusIcon className="create-link-icon" />
        <span className="create-link-text">Create Product</span>
      </Link>
      <div className='cards-container'>
        {loading && <div className='loading-state'>Loading...</div>}
        {products.length > 0 && (
          products.map((product, index) => (
            <ProductCard key={product._id} product={product} setProducts={setProducts} delay={index * 0.1} />
          ))
        )}
      </div>
    </div>
  )
}

export default HomePage