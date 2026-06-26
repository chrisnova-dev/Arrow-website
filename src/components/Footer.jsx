import { useState } from "react"
import { motion } from "framer-motion"
import { C, FONTS, CA } from "../Constants"

// Added to prevent runtime reference errors
const SOCIALS = [
  { label: "TWITTER", href: "https://x.com" },
  { label: "TELEGRAM", href: "https://t.me" },
]

function LogoMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <filter id="ft-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#ft-glow)">
        <polyline points="32,6 54,46 32,38 10,46" stroke="#C8FF00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(200,255,0,0.07)" />
        <line x1="32" y1="20" x2="32" y2="58" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 5" opacity="0.45" />
      </g>
    </svg>
  )
}

const NAV = [
  { label: "About",      href: "#about"       },
  { label: "Tokenomics",   href: "#tokenomics"  },
  { label: "Roadmap",      href: "#roadmap"      },
  { label: "FAQ",          href: "#faq"          },
  { label: "Community",    href: "#community"   },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      {/* Top neon accent line */}
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(200,255,0,0.28), transparent)" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 32px" }}>
        {/* Responsive flex-wrapper blocks */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginBottom: 40 }}>

          {/* Brand Column */}
          <div style={{ flex: "1 1 240px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <motion.div animate={{ filter: ["drop-shadow(0 0 5px #C8FF00)", "drop-shadow(0 0 12px #C8FF00)", "drop-shadow(0 0 5px #C8FF00)"] }} transition={{ repeat: Infinity, duration: 3 }}>
                <LogoMark size={26} />
              </motion.div>
              <span style={{ fontFamily: FONTS.display, fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", color: "#fff" }}>ARROW</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 12, fontFamily: FONTS.body, lineHeight: 1.7, maxWidth: 260, marginBottom: 16 }}>
              A Solana community token. Fair launch. No insiders. No exceptions.
            </p>
            {/* CA copy */}
            <button onClick={copy}
              style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, padding: "7px 12px", transition: "border-color 0.2s", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(200,255,0,0.3)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}>
              <span style={{ color: "rgba(200,255,0,0.5)", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", fontFamily: FONTS.body }}>CA</span>
              <span style={{ color: "rgba(255,255,255,0.28)", fontSize: 10, fontFamily: FONTS.mono }}>{CA ? `${CA.slice(0, 8)}...${CA.slice(-4)}` : "0x000...0000"}</span>
              <span style={{ color: copied ? "#22c55e" : "rgba(200,255,0,0.5)", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", fontFamily: FONTS.body }}>
                {copied ? "✓" : "COPY"}
              </span>
            </button>
          </div>

          {/* Navigation Column */}
          <div style={{ flex: "1 1 160px" }}>
            <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", fontFamily: FONTS.body, marginBottom: 16 }}>NAVIGATE</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV.map(l => (
                <a key={l.label} href={l.href}
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, fontFamily: FONTS.body, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = C.neon}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}>{l.label}</a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar with adaptive stacking features */}
        <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 11, fontFamily: FONTS.body, margin: 0, minWidth: "250px" }}>
            © 2025 ARROW · Community token on Solana · Not financial advice
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", fontFamily: FONTS.body, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = C.neon}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.2)"}>{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}