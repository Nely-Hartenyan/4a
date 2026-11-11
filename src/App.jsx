import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProductDetails from './pages/ProductDetails'
import Cart from "./pages/Cart";

function App() {

  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      <Route
        path="/dashboard"
        element={<DashboardLayout/>}
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
       <Route path="/products/:productId" element={<ProductDetails/>} />
      <Route path="/cart" element={<Cart/>}/>

   </Routes>
  );
}

export default App