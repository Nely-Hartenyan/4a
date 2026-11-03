function Header({cart}) {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-900">
          TechShop
        </h1>

        <nav className="flex gap-6">
          <a
            href="#"
            className="text-gray-600 transition hover:text-black"
          >
            Home
          </a>

          <a
            href="#products"
            className="text-gray-600 transition hover:text-black"
          >
            Products
          </a>

          <a
            href="#"
            className="text-gray-600 transition hover:text-black"
          >
            About
          </a>
        </nav>
        <p>Cart: {cart} </p>
      </div>
    </header>
  );
}

export default Header;