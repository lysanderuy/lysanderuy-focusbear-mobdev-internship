import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [data, setData] = useState(null);

  // Log mount and unmount
  useEffect(() => {
    console.log("UseEffectDemo mounted");
    return () => console.log("UseEffectDemo unmounted");
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await res.json();
      setData(result);
      console.log("Data fetched:", result);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-[#222810] border border-[#6e8840] rounded-md shadow-md flex flex-col gap-4">
      <h2 className="text-[#edf5a8] text-lg font-semibold">useEffect Demo</h2>

      <button
        onClick={fetchData}
        className="px-4 py-2 bg-transparent border border-[#96b050] text-[#96b050] rounded-sm text-sm uppercase tracking-wide hover:bg-[#96b050]/20 transition-colors"
      >
        Fetch Data
      </button>

      {data && (
        <div className="mt-4 p-4 bg-[#2c3515] rounded-sm border border-[#526630]">
          <h4 className="text-[#d4ed60] font-medium">{data.title}</h4>
          <p className="text-[#c2d878] text-sm mt-2">{data.body}</p>
        </div>
      )}
    </div>
  );
}
