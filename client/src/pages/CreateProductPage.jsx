// import packages and libraries
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import toast from 'react-hot-toast';


//import axios instance
import api from '../lib/axios.js';

// import css
import '../styles/pages/CreateProductPage.css'

const CreateProductPage = () => {

  // product info states
  const [name, setName] = useState("");
  const [sku, setSku] = useState(0);
  const [price, setPrice] = useState(0);
  const [series, setSeries] = useState("");
  const [stock, setStock] = useState(0);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {

  };

  


  return (
    <div className="page-container">
      <div className="page-actions">
        <Link to="/" className="link">
          <ArrowLeftIcon className="link-icon"/>
          <span className="link-text">Back to Home</span>
        </Link>
      </div>
      <div className="card-form-container">
        <h2 className="form-title">Create New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input type="text" 
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label className="label">
              <span className="label-text">SKU</span>
            </label>
            <input type="number" 
                value={sku}
                onChange={(e) => setSku(e.target.value)}
            />
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label className="label">
              <span className="label-text">Series</span>
            </label>
            <input type="text"
                placeholder="Category"
                value={series}
                onChange={(e) => setSeries(e.target.value)}
            />
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProductPage