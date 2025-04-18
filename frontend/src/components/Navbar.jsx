import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { user, logout } = useAuth();  // Retrieve user and logout function from context
  
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      {/* Logo / Brand Name */}
      <div className="text-2xl font-bold">VideoStream</div>

      {/* Navigation Links */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 w-64"
        />
      </div>
      
      <ul className="flex gap-6 text-lg">
        <li className="cursor-pointer hover:text-gray-300"><Link to="/">Home</Link></li>
        <li className="cursor-pointer hover:text-gray-300">Genre</li>
        {/* <li className="cursor-pointer hover:text-gray-300"><Link to="/login">Login</Link></li> */}
        <li className="cursor-pointer hover:text-gray-300"><Link to="/news">News</Link></li>
        <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
        {user ? (
          <>
            <li><Link to="/profile" className="hover:underline cursor-pointer hover:text-gray-300">Profile</Link></li>
            <li><button onClick={logout} className="hover:underline cursor-pointer hover:text-gray-300">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login" className="hover:underline">Login</Link></li>
        )}
      </ul>

      {/* Conditionally show Profile/Logout after login */}
      {/* <div className="space-x-4">
        
      </div> */}
    </nav>
  );
}

export default Navbar;
