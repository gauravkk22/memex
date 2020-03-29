import React from 'react';

import Header from './components/header'
import Footer from './components/footer'
import Home from './app/home'
import './App.scss';
import './assets/styles/flex.scss'

function App() {
  return (
    <div className="app-container">
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
