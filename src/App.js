import React from 'react'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './app/home/home'
import './App.scss'
import './assets/styles/flex.scss'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
