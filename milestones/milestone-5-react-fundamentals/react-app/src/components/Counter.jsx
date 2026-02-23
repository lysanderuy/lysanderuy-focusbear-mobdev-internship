import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#6A7337]/20 backdrop-blur-md shadow-lg rounded-2xl p-8 text-center max-w-sm w-full">
      <h1 className="text-2xl font-bold text-[#3B3E2F] mb-4">Counter</h1>
      <p className="text-xl mb-6">
        Current Count: <span className="font-mono">{count}</span>
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
