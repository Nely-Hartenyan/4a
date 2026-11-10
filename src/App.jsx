import { Routes, Route } from "react-router";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProductDetails from './pages/ProductDetails'
import Cart from "./pages/Cart";
function App() {
 const [cart,setCart] = useState([])

   function addToCart(product) {
      setCart(prev => [...prev, product])
  }

     function removeFromCart(product) {
      setCart(prev => prev.filter(item => item.id !== product.id))
  }

  return (
   <Routes>
      <Route path="/" element={<Home cartLength={cart.length} addToCart={addToCart} />}/>
      <Route path="/about" element={<About cartLength={cart.length}/>}/>
      <Route
        path="/dashboard"
        element={<DashboardLayout cartLength={cart.length}/>}
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
       <Route path="/products/:productId" element={<ProductDetails onAddToCart={addToCart}/>} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>

   </Routes>
  );
}

export default App