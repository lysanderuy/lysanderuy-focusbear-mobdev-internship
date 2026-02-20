import React from "react";
import Counter from "./Counter";
import HelloWorld from "./HelloWorld";

export default function App() {
  return (
    <main className="w-screen h-screen bg-[#F5F5F0] flex items-center justify-center px-4 overflow-hidden">
      {/* Main container: flex-col on mobile, flex-row on md+ */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Profile Card */}
        <div className="bg-[#6A7337]/20 backdrop-blur-md shadow-lg rounded-2xl p-10 max-w-sm w-full text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#3B3E2F]">Lysander Uy</h1>
          <p className="mt-2 text-[#55603F]">Mobile App Developer Intern</p>

          {/* Divider */}
          <div className="border-t border-[#BCC29C] my-6"></div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 mt-4 text-center md:text-left">
            <a
              href="https://lysanderuy.my.canva.site/"
              target="_blank"
              className="py-2 rounded-lg font-semibold text-[#3B3E2F] bg-[#6A7337]/30 hover:bg-[#6A7337]/50 transition"
            >
              Portfolio
            </a>
            <a
              href="https://github.com/lysanderuy/"
              target="_blank"
              className="py-2 rounded-lg font-semibold text-[#3B3E2F] bg-[#6A7337]/30 hover:bg-[#6A7337]/50 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lysanderuy"
              target="_blank"
              className="py-2 rounded-lg font-semibold text-[#3B3E2F] bg-[#6A7337]/30 hover:bg-[#6A7337]/50 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/uy_lysan"
              target="_blank"
              className="py-2 rounded-lg font-semibold text-[#3B3E2F] bg-[#6A7337]/30 hover:bg-[#6A7337]/50 transition"
            >
              Instagram
            </a>
            <a
              href="mailto:lysander.uy@gmail.com"
              className="py-2 rounded-lg font-semibold text-[#3B3E2F] bg-[#6A7337]/30 hover:bg-[#6A7337]/50 transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right Column: HelloWorld + Counter */}
        <div className="flex flex-col w-full max-w-sm items-center justify-center gap-6">
          <HelloWorld name="Everyone" />
          <Counter />
        </div>
      </div>
    </main>
  );
}
