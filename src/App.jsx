import { Routes, Route } from "react-router";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
 const [cart,setCart] = useState([])

   function addToCart(product) {
      setCart(prev => [...prev, product])
  }

  return (
   <Routes>
      <Route path="/" element={<Home cartLength={cart.length} addToCart={addToCart} />}/>
      <Route path="/about" element={<About cartLength={cart.length}/>}/>
   </Routes>
  );
}

export default App