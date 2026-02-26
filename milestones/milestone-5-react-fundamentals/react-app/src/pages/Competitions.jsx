import React from "react";
import { Link } from "react-router-dom";

export default function Competitions() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
        .noise  { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); opacity:0.18; }
      `}</style>
      <div
        className="w-screen h-screen overflow-hidden flex flex-col relative"
        style={{
          background: "linear-gradient(160deg, #181d0c 0%, #222810 50%, #2c3515 100%)",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div className="noise absolute inset-0 pointer-events-none z-0" />
        <header className="relative z-10 flex items-center justify-between px-14 py-5 border-b border-[#6e8840]/30">
          <Link
            to="/"
            className="px-2 py-1 border border-[#6e8840] text-[#96b050] text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-[#96b050]/20 transition-colors"
          >
            Back
          </Link>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#96b050]">Competitions</span>
        </header>
        <main className="relative z-10 flex-1 px-14 py-10">
          <h1
            className="text-[#edf5a8] font-light text-[clamp(42px,5vw,72px)] leading-[0.94]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Competitions
          </h1>
          <div className="mt-8 max-w-2xl rounded-xl border border-[#6e8840]/60 bg-[#232b12]/90 p-5">
            <p className="text-[#96b050] text-[10px] uppercase tracking-[0.2em]">Planned Section</p>
            <p className="text-[#c2d878] text-sm mt-3 leading-relaxed">
              Add competition history from first year college to present, with category, role, and
              results.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
