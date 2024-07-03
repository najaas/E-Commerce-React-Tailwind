import React from 'react'
import { FaShoppingCart, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kiyado</h1>
        <nav className="hidden md:flex space-x-16">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/products" className="hover:text-gray-300">Product List</a>
        </nav>
        <div className="flex items-center">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-300"/>
        </div>
      </div>
    </header>
  )
}

export default Header