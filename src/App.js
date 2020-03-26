import React from 'react';
// import logo from './logo.svg';
import Header from './components/header'
import Footer from './components/footer'
import Home from './app/home'
import './App.scss';

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
