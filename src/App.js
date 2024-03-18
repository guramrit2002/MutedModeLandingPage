import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingpage';
import ProductDetail from './pages/productdetailpage';

function App() {
  
  
  return (
    <Routes>
      <Route path='/' element = {<LandingPage/>}></Route>
      <Route path='/singleproduct' element={<ProductDetail/>}></Route>
    </Routes>
    );
}

export default App;
