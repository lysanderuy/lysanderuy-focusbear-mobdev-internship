"use client";

import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() === "") return; // prevent empty items
    setItems([...items, inputValue]);
    setInputValue(""); // clear input
  };

  return (
    <main className="w-screen h-screen bg-[#F5F5F0] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-6 text-black">Dynamic List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-black border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-black"
          placeholder="Enter text"
        />
        <button
          onClick={handleAddItem}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2 w-full max-w-sm">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-white border border-gray-300 rounded px-4 py-2 shadow-sm text-black"
          >
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}
