import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };
  return (
    <div className="w-full border border-red-600 h-[30rem] flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-4 ">
        <p className="uppercase">Life coaching for high-achievers</p>
        <h1 className="text-4xl font-bold">One-on-one Coaching</h1>
        <p>
          It’s time to enjoy professional success and a fulfilling personal
          life.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center 
            mt-4 bg-white rounded border border-red-400"
        >
          <div className="flex-shrink-0 ml-2">
            {/* Left side search icon */}
            <RiSearchLine className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="appearance-none  py-2 px-4
             text-gray-700 
             leading-tight focus:outline-none focus:ring-0 w-[400px]"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-main-dark text-white 
            font-bold py-2 px-4  focus:outline-none focus:ring-0 rounded-r"
          >
            {/* Right side search button */}
           Search 
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Banner;
