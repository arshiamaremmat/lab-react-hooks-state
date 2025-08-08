import React from 'react'
import ProductCard from './ProductCard'

// Exported so tests can import ids
export const sampleProducts = [
  { id: 'apple',  name: 'Apple',  category: 'Fruits' },
  { id: 'banana', name: 'Banana', category: 'Fruits' },
  { id: 'milk',   name: 'Milk',   category: 'Dairy' },
  { id: 'cheese', name: 'Cheese', category: 'Dairy' },
]

const ProductList = ({ category = 'all', onAddToCart, products = sampleProducts }) => {
  const visible =
    category === 'all' ? products : products.filter(p => p.category === category)

  if (visible.length === 0) {
    // EXACT text your test expects
    return <p>No products available.</p>
  }

  return (
    <div className="product-list">
      {visible.map(product => (
        <ProductCard
          key={product.id}              // fixes the "unique key" warning
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList



