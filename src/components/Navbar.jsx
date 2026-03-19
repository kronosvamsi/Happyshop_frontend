import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">HappyShop</h1>

      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:text-indigo-600">
          Home
        </Link>
        <Link to="/products" className="hover:text-indigo-600">
          Products
        </Link>
        <Link to="/orders" className="hover:text-indigo-600">
          Orders
        </Link>
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
