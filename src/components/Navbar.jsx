import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { C, FONTS } from "../Constants"

function LogoMark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <filter id="nv-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#nv-glow)">
        <polyline points="32,6 54,46 32,38 10,46" stroke="#C8FF00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(200,255,0,0.07)" />
        <line x1="32" y1="20" x2="32" y2="58" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 5" opacity="0.45" />
        <polyline points="32,14 48,42 32,36 16,42" stroke="rgba(200,255,0,0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  )
}

const NAV_LINKS = ["About", "Tokenomics", "Roadmap", "FAQ", "Community"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mOpen,    setMOpen]    = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => scrollY.on("change", v => setScrolled(v > 60)), [scrollY])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{
        position: "sticky", top: 0, zIndex: 100,
        background:           scrolled ? "rgba(5,5,5,0.88)" : "transparent",
        backdropFilter:       scrolled ? "blur(20px)"        : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)"        : "none",
        borderBottom:         scrolled ? "1px solid rgba(200,255,0,0.1)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: scrolled ? 60 : 72, transition: "height 0.4s",
      }}>

        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <motion.div animate={{ filter: ["drop-shadow(0 0 6px #C8FF00)", "drop-shadow(0 0 16px #C8FF00)", "drop-shadow(0 0 6px #C8FF00)"] }} transition={{ repeat: Infinity, duration: 3 }}>
            <LogoMark size={30} />
          </motion.div>
          <span style={{ fontFamily: FONTS.display, fontWeight: 900, fontSize: 14, letterSpacing: "0.3em", color: "#fff" }}>ARROW</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden-mobile">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ color: C.textMid, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textDecoration: "none", fontFamily: FONTS.body, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.neon}
              onMouseLeave={e => e.target.style.color = C.textMid}
            >{l.toUpperCase()}</a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="hidden-mobile">
          <a href="#community" className="btn-ghost" style={{ padding: "10px 20px", borderRadius: 2, fontFamily: FONTS.body }}>JOIN TELEGRAM</a>
          <a href="#dex"       className="btn-primary" style={{ padding: "10px 22px", borderRadius: 2, fontFamily: FONTS.body }}><span>▲ BUY ARROW</span></a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMOpen(!mOpen)} style={{ display: "none", background: "none", border: "none", color: "#fff", padding: 4 }} className="show-mobile">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="2" y1="5.5"  x2="20" y2="5.5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="11"   x2="20" y2="11"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="16.5" x2="20" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ background: "rgba(5,5,5,0.97)", borderBottom: "1px solid rgba(200,255,0,0.1)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
              {NAV_LINKS.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMOpen(false)}
                  style={{ color: C.textMid, fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textDecoration: "none", fontFamily: FONTS.body }}>{l}</a>
              ))}
              <a href="#dex" className="btn-primary" style={{ padding: "12px 20px", borderRadius: 2, fontFamily: FONTS.body, textAlign: "center", marginTop: 8 }}><span>▲ BUY ARROW</span></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}