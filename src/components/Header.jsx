import { NavLink } from "react-router";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Header() {
   const { cartCount } = useContext(CartContext);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-900">
          TechShop
        </h1>

        <nav className="flex gap-6">
          <NavLink
            to="/"
             className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
             className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }        >
            Dashboard
          </NavLink>

          <NavLink
            to="/about"
             className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }

          >
            About
          </NavLink>
        </nav>
         <NavLink
            to="/cart"
             className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }          >Cart: {cartCount} </NavLink>
      </div>
    </header>
  );
}

export default Header;