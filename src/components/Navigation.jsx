import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { LogoSVG } from "./CommonElements";
import { C, FONTS } from "../styles/global";

const TICKER_ITEMS = [
  "✓ No Insider Wallets",
  "✓ No Founder Allocation",
  "✓ No VC Allocation",
  "✓ Community First",
  "✓ Fair Launch",
  "✓ Built On Solana",
  "✓ Transparent Distribution",
  "✓ Equal Entry For All",
];

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{
      position: "relative", zIndex: 50, height: 36,
      background: "rgba(200,255,0,0.06)",
      borderBottom: "1px solid rgba(200,255,0,0.12)",
      overflow: "hidden",
      display: "flex", alignItems: "center",
    }}>
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to right, #050505, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to left, #050505, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      <div style={{
        display: "flex", gap: 0,
        animation: "ticker 28s linear infinite",
        whiteSpace: "nowrap",
      }}>
        {items.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
            <span style={{
              color: C.neon,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontFamily: FONTS.body,
              padding: "0 28px",
            }}>{t}</span>
            <span style={{ color: "rgba(200,255,0,0.3)", fontSize: 10 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mOpen, setMOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", v => setScrolled(v > 60)), [scrollY]);

  const links = ["About","Tokenomics","Roadmap","FAQ","Community"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22,1,0.36,1], delay: 0.1 }}
      style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,255,0,0.1)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? 60 : 72, transition: "height 0.4s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <motion.div animate={{ filter: ["drop-shadow(0 0 6px #C8FF00)","drop-shadow(0 0 14px #C8FF00)","drop-shadow(0 0 6px #C8FF00)"] }} transition={{ repeat: Infinity, duration: 3 }}>
            <LogoSVG size={30} />
          </motion.div>
          <span style={{ fontFamily: FONTS.display, fontWeight: 900, fontSize: 14, letterSpacing: "0.3em", color: "#fff" }}>ARROW</span>
        </div>

        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden-mobile">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ color: C.textMid, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none", fontFamily: FONTS.body, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.neon}
              onMouseLeave={e => e.target.style.color = C.textMid}
            >{l.toUpperCase()}</a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="hidden-mobile">
          <a href="#community" className="btn-ghost" style={{ padding: "10px 20px", borderRadius: 2, textDecoration: "none", fontFamily: FONTS.body, display: "inline-block" }}>
            JOIN TELEGRAM
          </a>
          <a href="#buy" className="btn-primary" style={{ padding: "10px 22px", borderRadius: 2, textDecoration: "none", fontFamily: FONTS.body, display: "inline-block" }}>
            <span>BUY ARROW</span>
          </a>
        </div>

        <button onClick={() => setMOpen(!mOpen)} style={{ display: "none", background: "none", border: "none", color: "#fff", padding: 4 }} className="show-mobile">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="2" y1="5.5" x2="20" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="2" y1="16.5" x2="20" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mOpen && (
          <motion.div initial={{ height:0,opacity:0 }} animate={{ height:"auto",opacity:1 }} exit={{ height:0,opacity:0 }}
            style={{ background:"rgba(5,5,5,0.97)", borderBottom:"1px solid rgba(200,255,0,0.1)", overflow:"hidden" }}
          >
            <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:16 }}>
              {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setMOpen(false)}
                style={{ color:C.textMid, fontSize:13, fontWeight:600, letterSpacing:"0.1em", textDecoration:"none", fontFamily:FONTS.body }}>{l}</a>)}
              <a href="#buy" className="btn-primary" style={{ padding:"12px 20px", borderRadius:2, textDecoration:"none", fontFamily:FONTS.body, textAlign:"center" }}>
                <span>BUY ARROW</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}