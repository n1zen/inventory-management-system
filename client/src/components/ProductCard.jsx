import React from 'react'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'

const ProductCard = ({product, setProducts}) => {
  return (
    <div className="card-container card-shadow">
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
                <span className="card-date">Created: {product.createdAt.split('T')[0]}</span>
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