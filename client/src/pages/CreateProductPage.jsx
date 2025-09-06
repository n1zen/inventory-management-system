// import packages and libraries
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import toast from 'react-hot-toast';

//import axios instance
import api from '../lib/axios.js';

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
        <h1>Create Product Page</h1>
    </div>
  )
}

export default CreateProductPage