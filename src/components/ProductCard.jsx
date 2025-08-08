import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  const handleAdd = () => {
    if (onAddToCart) onAddToCart(product.name)
  }

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      {product.category && <p>Category: {product.category}</p>}
      <button
        data-testid={`product-${product.id}`} // test looks up by this id
        onClick={handleAdd}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard


