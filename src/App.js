import React from 'react'
import logo from './assets/logo.png'

import Calculator from './Caluclator'
import './assets/index.css'

export default function App() {
  return (
    <div className="App">
      <img alt="Equal Experts Logo" src={logo} className="logo" />
      <h1>Equal Experts Calculator</h1>
      <Calculator />
    </div>
  )
}
