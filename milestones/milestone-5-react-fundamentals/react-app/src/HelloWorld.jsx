import React from "react";

export default function HelloWorld({ name }) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold text-[#3B3E2F]">Hello, {name}!</h1>
    </div>
  );
}
