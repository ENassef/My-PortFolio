import React from 'react';

export default function Header() {
  return (
    <div className="font-main bg-main text-white p-2 capitalize flex justify-between px-4 border-b-2 border-gray-700">
      {/* Left */}
      <div className="flex items-center text-[12px] tracking-widest space-x-2 md:space-x-4">
        <div className="flex items-center">
          <img
            src="/icon.svg"
            alt="Eslam Nassef logo"
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </div>
        {/* Left list */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-3">
            <li className="cursor-pointer">File</li>
            <li className="cursor-pointer">Edit</li>
            <li className="cursor-pointer">View</li>
            <li className="cursor-pointer">Go</li>
            <li className="cursor-pointer">Run</li>
            <li className="cursor-pointer">Terminal</li>
            <li className="cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      {/* Centered */}
      <div className="italic flex items-center text-center text-sm md:text-lg">
        <p>Eslam Nassef - Front-End Developer</p>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400 rounded-full cursor-pointer"></div>
        <div className="w-4 h-4 bg-green-200 hover:bg-green-300 active:bg-green-400 rounded-full cursor-pointer"></div>
        <div className="w-4 h-4 bg-red-200 hover:bg-red-300 active:bg-red-400 rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
}