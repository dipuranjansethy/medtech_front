import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgotpassword from './components/Auth/ForgotPassword';
import Reset from './components/Auth/Reset';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword/:token" element={<Reset />} />
        
      </Routes>
    </Router>
  );
}

export default App;
