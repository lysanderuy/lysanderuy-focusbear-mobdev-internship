import React, { useState } from "react";

export default function ListInputForm() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    setItems((previousItems) => [...previousItems, trimmedValue]);
    setInputValue("");
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter a list item"
          className="flex-1 rounded-sm border border-[#6e8840] bg-[#1a200b] px-3 py-2 text-[#edf5a8] outline-none placeholder:text-[#73854a]"
        />
        <button
          type="button"
          onClick={handleAddItem}
          className="rounded-sm border border-[#6e8840] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#96b050] hover:bg-[#96b050]/20"
        >
          Add
        </button>
      </div>

      <ul className="mt-5 space-y-2 text-[#c2d878]">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="rounded-sm border border-[#6e8840]/40 bg-[#1c230d] px-3 py-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
