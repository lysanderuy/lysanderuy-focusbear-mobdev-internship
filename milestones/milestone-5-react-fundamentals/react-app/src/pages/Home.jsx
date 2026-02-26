import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .fade-1 { animation: fadeUp 0.5s ease both; }
        .fade-2 { animation: fadeUp 0.6s ease 0.1s both; }
        .fade-3 { animation: fadeUp 0.7s ease 0.2s both; }
        .noise  { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); opacity:0.18; }
      `}</style>

      <div
        className="w-screen h-screen flex flex-col relative"
        style={{
          background:
            "linear-gradient(160deg, #181d0c 0%, #222810 50%, #2c3515 100%)",
          fontFamily: "'DM Mono', monospace",
          overflow: "hidden",
        }}
      >
        <div className="noise absolute inset-0 pointer-events-none z-0" />
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#7a8f40 1px, transparent 1px), linear-gradient(90deg, #7a8f40 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          className="absolute pointer-events-none z-0 w-[60vw] h-[60vh] top-[20%] -left-[10%]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(90,110,40,0.12) 0%, transparent 70%)",
          }}
        />

        <header
          className={`relative z-10 flex items-center justify-between px-14 py-7 border-b border-[#6e8840]/30 ${
            mounted ? "fade-1" : "opacity-0"
          }`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#96b050]">
            Home
          </span>
          <div className="flex items-center gap-2">
            <span
              className="blink w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "#96b050", boxShadow: "0 0 8px #96b050" }}
            />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#96b050]">
              Portfolio
            </span>
          </div>
        </header>

        <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-14 py-10 gap-6">
          <h1
            className={`text-[#edf5a8] font-light text-[clamp(52px,6vw,96px)] leading-[0.92] ${
              mounted ? "fade-2" : "opacity-0"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Lysander Uy
          </h1>
          <p className="text-[#a8c84a] text-[11px] tracking-[0.18em] uppercase">
            Full Stack & Mobile Application Developer
          </p>
          <p className="text-[#c2d878] text-xs tracking-[0.14em] uppercase">Portfolio Sections</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-xl">
            {[
              { to: "/profile", label: "Profile" },
              { to: "/experience", label: "Experience" },
              { to: "/projects", label: "Projects" },
              { to: "/robotics", label: "Robotics" },
              { to: "/competitions", label: "Competitions" },
              { to: "/sandbox", label: "Sandbox" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex items-center justify-center px-4 py-2 border border-[#6e8840] rounded-sm text-[10px] tracking-[0.2em] uppercase text-[#96b050] bg-transparent transition-colors hover:border-[#96b050] hover:text-[#d4ed60]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </main>

        <footer
          className={`relative z-10 flex items-center justify-between px-14 py-5 border-t border-[#6e8840]/20 ${
            mounted ? "fade-3" : "opacity-0"
          }`}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#526630]">
            Full Stack & Mobile Application Developer
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#526630]">
            {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </>
  );
}
