import React, { useState, useCallback } from "react";

// Memoized child component
const ChildButton = React.memo(({ onClick }) => {
  console.log("ChildButton rendered"); // Check console or React DevTools
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border border-[#6e8840] text-[#96b050] rounded-sm mt-4 hover:bg-[#96b050]/20 transition-colors"
    >
      Click Me
    </button>
  );
});

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  // Memoized function passed to child
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Stable reference

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-[#edf5a8] font-light text-lg">useCallback Demo</h2>
      <p className="text-[#c2d878]">Parent count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 border border-[#6e8840] text-[#96b050] rounded-sm hover:bg-[#96b050]/20 transition-colors"
      >
        Increase Count
      </button>

      {/* Pass memoized function to child */}
      <ChildButton onClick={handleClick} />
    </div>
  );
}
