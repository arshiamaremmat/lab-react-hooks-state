import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

// Inline data so the app works even without src/data/products.js
const PRODUCTS = [
  { name: 'Apple', category: 'Fruits' },
  { name: 'Banana', category: 'Fruits' },
  { name: 'Milk', category: 'Dairy' },
  { name: 'Cheese', category: 'Dairy' },
]

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state (array of product names)
  const [cart, setCart] = useState([])

  // Category filter state
  const [category, setCategory] = useState('all')

  // Toggle dark mode
  const handleToggleDarkMode = () => setDarkMode(prev => !prev)

  // Add product to cart (avoid duplicates)
  const handleAddToCart = (productName) => {
    setCart(prev => (prev.includes(productName) ? prev : [...prev, productName]))
  }

  // Handle category change
  const handleCategoryChange = (e) => setCategory(e.target.value)

  const containerStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '1rem',
    transition: 'background-color 150ms ease, color 150ms ease',
  }

  return (
    <div className={darkMode ? 'app dark' : 'app light'} style={containerStyle}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      {/* Category Filter */}
      <label htmlFor="category-filter" style={{ marginLeft: '1rem' }}>
        Filter by Category:{' '}
      </label>
      <select id="category-filter" value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List */}
        <ProductList
      category={category}
      onAddToCart={handleAddToCart}
    />

      {/* Cart */}
      <Cart items={cart} />
    </div>
  )
}

export default App

