import React from 'react'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'

import { formatDate  } from '../lib/utils.js';

import '../styles/components/ProductCard.css'; 

const ProductCard = ({product, setProducts, delay}) => {

    const cardStyle = {
        animationDelay: `${delay}s`
    };

    return (
        <div className="card-container card-shadow card-popin" style={cardStyle}>
            <div className="card-content">
                <div className="card-title">
                    <h1 className="card-title-text">{product.name}</h1>
                    <span className="card-sku">SKU: {product.sku}</span>
                </div>
                <div className="card-main-details">
                    <span className="card-series">Series: {product.series}</span>
                    <span className="card-price">Php {product.price}</span>
                </div>
                <div className="card-secondary-details">
                    <span className="card-date">Created: {formatDate(new Date(product.createdAt))}</span>
                    <span className="card-stock">Stock: {product.stock}</span>
                </div>
                <div className="card-actions">
                    <button className="card-action-button btn-edit">
                        <PenSquareIcon className="card-action-button-icon" />
                    </button>
                    <button className="card-action-button btn-delete">
                        <Trash2Icon className="card-action-button-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard