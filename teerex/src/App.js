

import './App.css';
import { Routes, Route } from "react-router-dom";
import Product from './Pages/Products/Product';
import Cart from './Pages/Cart/Cart';
import Navbar from './Nav/Navbar';




function App() {
  
  return (
    <div className="App">
    <Navbar/>

    <Routes>
    <Route path='/' element={<Product/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>  
    </Routes> 
    </div>
  );
}

export default App;
