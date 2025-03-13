import React from "react";
import { FaOpencart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-950 text-white shadow-md">
      <div className="text-xl font-bold flex items-center gap-2">
        <FaOpencart className="text-2xl text-white" />
        <div className=" flex justify-center ">
          <div className="flex justify-between items-center w-full">
            <div className="text-white">Blogify</div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
