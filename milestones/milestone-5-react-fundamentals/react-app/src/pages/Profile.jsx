import React, { useState, useEffect } from "react";

const links = [
  {
    label: "Portfolio",
    href: "https://lysanderuy.my.canva.site/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lysanderuy",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/lysanderuy",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/uy_lysan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "lysander.uy@gmail.com",
    href: "mailto:lysander.uy@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

const stack = [
  "Next.js + TypeScript",
  "NestJS",
  "Prisma",
  "Supabase / Firebase",
  "Tailwind CSS",
];

export default function Profile() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setMounted(true);
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .fade-1 { animation: fadeUp 0.5s ease both; }
        .fade-2 { animation: fadeUp 0.6s ease 0.1s both; }
        .fade-3 { animation: fadeUp 0.7s ease 0.2s both; }
        .fade-4 { animation: fadeUp 0.7s ease 0.35s both; }
        .fade-5 { animation: fadeUp 0.7s ease 0.3s both; }
        .fade-6 { animation: fadeUp 0.7s ease 0.45s both; }
        .fade-7 { animation: fadeUp 0.5s ease 0.5s both; }
        .blink  { animation: blink 2.5s infinite; }
        .noise  { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
      `}</style>

      <div
        className="w-screen h-screen overflow-hidden flex flex-col relative"
        style={{
          background:
            "linear-gradient(160deg, #181d0c 0%, #222810 50%, #2c3515 100%)",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {/* Noise / grid / glow */}
        <div className="noise absolute inset-0 pointer-events-none z-0 opacity-[0.18]" />
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

        {/* HEADER */}
        <header
          className={`relative z-10 flex items-center justify-between px-14 py-7 border-b border-[#6e8840]/30 ${mounted ? "fade-1" : "opacity-0"}`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#96b050]">
            lysander.uy
          </span>
          <div className="flex items-center gap-2">
            <span
              className="blink w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "#96b050", boxShadow: "0 0 8px #96b050" }}
            />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#96b050]">
              Available for work
            </span>
          </div>
        </header>

        {/* MAIN */}
        <main
          className="relative z-10 flex-1 grid overflow-hidden px-14"
          style={{ gridTemplateColumns: "1fr 1px 1fr" }}
        >
          {/* LEFT */}
          <section className="flex flex-col justify-center pr-16 py-6 overflow-hidden">
            <div
              className={`flex items-center gap-6 mb-10 ${mounted ? "fade-2" : "opacity-0"}`}
            >
              <div
                className="w-16 h-16 rounded-full shrink-0 flex items-center justify-center text-base font-bold text-[#edf5a8]"
                style={{
                  border: "1.5px solid rgba(180,210,80,0.55)",
                  background: "linear-gradient(135deg, #2e3b18, #4a5c28)",
                  boxShadow: "0 0 24px rgba(130,160,50,0.3)",
                }}
              >
                LU
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#c2d878] mb-1">
                  Mobile App Developer
                </div>
                <div className="text-[11px] tracking-widest text-[#96b050]">
                  @ Focus Bear
                </div>
              </div>
            </div>

            <div className={`mb-12 ${mounted ? "fade-3" : "opacity-0"}`}>
              <h1
                className="font-light leading-[0.92] text-[#edf5a8]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(52px, 6vw, 96px)",
                }}
              >
                Lysander
              </h1>
              <h1
                className="font-semibold leading-[0.92] mb-5 text-[#a8c84a]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(52px, 6vw, 96px)",
                }}
              >
                Uy.
              </h1>
              <p className="text-xs leading-relaxed text-[#c2d878] max-w-xs mt-4 tracking-wide">
                I craft mobile apps and intuitive digital experiences that put
                people first. Let's build something together.
              </p>
            </div>

            <div className={mounted ? "fade-4" : "opacity-0"}>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#96b050] border border-[#6e8840] px-4 py-2 rounded-sm bg-transparent cursor-pointer transition-colors hover:border-[#96b050] hover:text-[#d4ed60]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back
              </button>
            </div>
          </section>

          {/* Divider */}
          <div
            className="my-12"
            style={{ background: "rgba(120,145,55,0.22)" }}
          />

          {/* RIGHT */}
          <section className="flex flex-col justify-center pl-16 py-6 overflow-hidden">
            <div className={`mb-12 ${mounted ? "fade-5" : "opacity-0"}`}>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#96b050] mb-5">
                Connect
              </p>
              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded no-underline transition-all cursor-pointer ${hovered === i ? "border border-[#6e8840]/60" : "border border-transparent"}`}
                    style={{
                      background:
                        hovered === i ? "rgba(150,180,60,0.1)" : "transparent",
                    }}
                  >
                    <span
                      className={`w-7 h-7 shrink-0 flex items-center justify-center rounded transition-colors ${hovered === i ? "border border-[#96b050] text-[#d4ed60]" : "border border-[#6e8840] text-[#c2d878]"}`}
                    >
                      {link.icon}
                    </span>
                    <span
                      className={`text-xs tracking-wide flex-1 transition-colors ${hovered === i ? "text-[#d4ed60]" : "text-[#c2d878]"}`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`text-xs text-[#96b050] transition-opacity ${hovered === i ? "opacity-100" : "opacity-0"}`}
                    >
                      →
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className={mounted ? "fade-6" : "opacity-0"}>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#96b050] mb-4">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] tracking-wide px-3 py-1.5 border border-[#6e8840] text-[#c2d878] rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer
          className={`relative z-10 flex items-center justify-between px-14 py-5 border-t border-[#6e8840]/20 ${mounted ? "fade-7" : "opacity-0"}`}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#526630]">
            Focus Bear · Mobile App Developer
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#526630]">
            {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </>
  );
}
