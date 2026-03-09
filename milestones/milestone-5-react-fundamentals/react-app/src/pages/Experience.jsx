import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const experienceEntries = [
  {
    roleTitle: "Full Stack Developer",
    company: "Symph",
    period: "Feb - Present",
    contracts: ["FinSpend (Feb - Present)", "CourtHub (Feb - Present)"],
  },
  {
    roleTitle: "Mobile App Developer",
    company: "Focus Bear",
    period: "Feb - Present",
    contracts: [],
  },
  {
    roleTitle: "Freelance Full-Stack Developer",
    company: "Anek2",
    period: "Jan - Present",
    contracts: ["Current project: DOH Lab Form Automation."],
  }
];

export default function Experience() {
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
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.25} }
        .fade-1 { animation: fadeUp 0.5s ease both; }
        .fade-2 { animation: fadeUp 0.6s ease 0.1s both; }
        .fade-3 { animation: fadeUp 0.7s ease 0.2s both; }
        .blink  { animation: blink 2.5s infinite; }
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
            background: "radial-gradient(ellipse, rgba(90,110,40,0.12) 0%, transparent 70%)",
          }}
        />

        <header
          className={`relative z-10 flex items-center justify-between px-14 py-5 border-b border-[#6e8840]/30 ${
            mounted ? "fade-1" : "opacity-0"
          }`}
        >
          <Link
            to="/"
            className="px-2 py-1 border border-[#6e8840] text-[#96b050] text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-[#96b050]/20 transition-colors"
          >
            Back
          </Link>
          <div className="flex items-center gap-2">
            <span
              className="blink w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "#96b050", boxShadow: "0 0 8px #96b050" }}
            />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#96b050]">Experience</span>
          </div>
        </header>

        <main className="relative z-10 flex-1 overflow-y-auto px-14 py-10">
          <h1
            className={`text-[#edf5a8] font-light text-[clamp(42px,5vw,72px)] leading-[0.94] ${
              mounted ? "fade-2" : "opacity-0"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Work Experience
          </h1>

          <div className={`mt-8 grid gap-4 max-w-3xl ${mounted ? "fade-3" : "opacity-0"}`}>
            {experienceEntries.map((entry) => (
              <article
                key={`${entry.roleTitle}-${entry.company}`}
                className="rounded-xl border border-[#6e8840]/60 bg-[#232b12]/90 p-5"
              >
                <h2 className="text-[#edf5a8] text-lg">{entry.roleTitle}</h2>
                <p className="text-[#a8c84a] text-sm mt-1">{entry.company}</p>
                <p className="text-[#96b050] text-[10px] uppercase tracking-[0.2em] mt-2">{entry.period}</p>
                {entry.contracts.length > 0 ? (
                  <div className="mt-4">
                    <p className="text-[#c2d878] text-[10px] uppercase tracking-[0.2em] mb-2">Contracts</p>
                    <div className="space-y-2">
                      {entry.contracts.map((contract) => (
                        <p
                          key={contract}
                          className="rounded-lg bg-[#1f2710] border border-[#6e8840]/40 px-3 py-2 text-[#edf5a8] text-sm"
                        >
                          {contract}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
