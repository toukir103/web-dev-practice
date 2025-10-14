// In the name of Allah
import { Menu, X } from "lucide-react"; // for mobile menu icons
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ===== Left: Logo ===== */}
        <Link to="/" className="text-2xl font-bold">
          AbidAuth
        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-200">
            Registration
          </Link>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-4 flex flex-col gap-4">
          <Link to="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/login" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Registration
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
