import React from 'react'

export default function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button onClick={onToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}