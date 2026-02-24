import React, { useState, useMemo } from "react";

export default function UseMemoDemo() {
  const [search, setSearch] = useState("");
  const [rerenderCount, setRerenderCount] = useState(0);

  // Base names
  const baseNames = [
    "Bea",
    "Piolo",
    "Ivor",
    "Lysander",
    "Sean",
    "Ben",
    "Vince",
    "Desiree",
  ];

  // Generate 5000 users
  const users = useMemo(() => {
    return Array.from({ length: 5000 }, (_, i) => {
      const name = baseNames[i % baseNames.length];
      return `${name} ${i + 1}`;
    });
  }, []);

  // Expensive filter operation
  const filteredUsers = useMemo(() => {
    console.log("Filtering 5000 users...");

    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, users]); // Only runs when search changes

  return (
    <div className="w-full flex flex-col items-center gap-6 text-[#c2d878]">
      <div className="text-center space-y-2">
        <h2 className="text-[#edf5a8] text-xl tracking-widest uppercase">
          Large Search Demo
        </h2>
        <p className="text-xs opacity-70">
          Filtering runs only when search changes (useMemo).
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-4 flex-wrap justify-center">
        <input
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1 bg-[#1b210d] border border-[#6e8840] text-[#edf5a8] text-xs rounded-sm focus:outline-none focus:border-[#96b050]"
        />

        <button
          onClick={() => setRerenderCount((prev) => prev + 1)}
          className="px-3 py-1 border border-[#96b050] text-[#96b050] rounded-sm hover:bg-[#96b050]/20 transition-colors text-xs"
        >
          Re-render Only ({rerenderCount})
        </button>
      </div>

      {/* Result Count */}
      <div className="text-sm">
        Results: <span className="text-[#edf5a8]">{filteredUsers.length}</span>
      </div>

      {/* List */}
      <div className="h-40 w-full max-w-md overflow-y-scroll border border-[#6e8840]/30 rounded-sm p-3 bg-[#1b210d] text-[11px]">
        {filteredUsers.slice(0, 200).map((user, index) => (
          <div key={index}>{user}</div>
        ))}
      </div>
    </div>
  );
}
