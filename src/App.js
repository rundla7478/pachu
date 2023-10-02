import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import OurCauses from './pages/OurCauses';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/our-causes" element={<OurCauses />} />
    <Route path="/shop" element={<Shop />} />
    </Routes>
    <Footer />
    </Router>      
    </div>
  );
}

export default App;
