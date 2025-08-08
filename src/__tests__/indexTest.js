import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import { sampleProducts } from '../components/ProductList'

test('toggles dark mode on button click', () => {
  render(<App />)

  const toggleBtn = screen.getByRole('button', { name: /toggle/i })
  expect(toggleBtn).toBeInTheDocument()

  // click -> should switch to Light
  fireEvent.click(toggleBtn)
  expect(toggleBtn.textContent.toLowerCase()).toMatch(/light/)

  // click -> should switch back to Dark
  fireEvent.click(toggleBtn)
  expect(toggleBtn.textContent.toLowerCase()).toMatch(/dark/)
})

test('filters products by category', () => {
  render(<App />)
  const dropdown = screen.getByRole('combobox')

  fireEvent.change(dropdown, { target: { value: 'Fruits' } })
  expect(screen.getByText(/Apple/i)).toBeInTheDocument()
  expect(screen.queryByText(/Milk/i)).not.toBeInTheDocument()
})

test('displays message when no products match filter', () => {
  render(<App />)
  const dropdown = screen.getByRole('combobox')

  fireEvent.change(dropdown, { target: { value: 'NonExistent' } })
  expect(screen.getByText(/no products available/i)).toBeInTheDocument()
})

test('adds items to cart', () => {
  render(<App />)

  // Click Apple add button
  const appleId = sampleProducts.find(p => p.name === 'Apple').id
  const appleBtn = screen.getByTestId('product-' + appleId)
  fireEvent.click(appleBtn)

  expect(screen.getByText(/shopping cart/i)).toBeInTheDocument()
  expect(screen.getByText(/Apple is in your cart/i)).toBeInTheDocument()

  // Click Milk add button
  const milkId = sampleProducts.find(p => p.name === 'Milk').id
  const milkBtn = screen.getByTestId('product-' + milkId)
  fireEvent.click(milkBtn)

  expect(screen.getByText(/Milk is in your cart/i)).toBeInTheDocument()
})
