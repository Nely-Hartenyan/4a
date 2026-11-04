import { Link,NavLink } from "react-router";

function Header({cart}) {
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

          <a
            href="#products"
            className="text-gray-600 transition hover:text-black"
          >
            Product
          </a>

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
        <p>Cart: {cart} </p>
      </div>
    </header>
  );
}

export default Header;