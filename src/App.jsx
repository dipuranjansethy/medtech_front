import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from  './Pages/Home';
import Reports from  './Pages/Reports';
import Products from  './Pages/Products';

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact components={Home} />
          <Route path='/reports' components={Reports} />
          <Route path='/products' components={Products} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
