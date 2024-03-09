import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
    
    <Routes> 
      <Route path='products/:id' element={<ProductDetails />} />
        <Route path='/' element={<ProductsList />} />
       
    </Routes>
    </>

    
  );
}

export default App;
