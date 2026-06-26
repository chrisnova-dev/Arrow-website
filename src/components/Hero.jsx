import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { C, FONTS, CA } from "../Constants"

/* ── Particle canvas ── */
function Particles() {
  const ref   = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext("2d")
    let raf

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener("resize", resize)
    const onM = (e) => { mouse.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener("mousemove", onM)

    const pts = Array.from({ length: 85 }, () => ({
      x: Math.random() * canvas.width,  y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.2,    a: Math.random() * 0.5 + 0.08,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x: mx, y: my } = mouse.current
      pts.forEach(p => {
        const dx = mx - p.x, dy = my - p.y
        if (Math.sqrt(dx * dx + dy * dy) < 110) { p.vx += dx * 0.00008; p.vy += dy * 0.00008 }
        p.vx *= 0.995; p.vy *= 0.995
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width;  if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,255,0,${p.a})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 115) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(200,255,0,${0.06 * (1 - d / 115)})`
            ctx.lineWidth = 0.4
            ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onM) }
  }, [])

  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }} />
}

/* ── Logo SVG ── */
function Logo({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <filter id="hero-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#hero-glow)">
        <polyline points="32,6 54,46 32,38 10,46" stroke="#C8FF00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(200,255,0,0.07)" />
        <line x1="32" y1="20" x2="32" y2="58" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 5" opacity="0.45" />
        <polyline points="32,14 48,42 32,36 16,42" stroke="rgba(200,255,0,0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  )
}

const STATS = [
  { label: "Launch Status",  value: "LIVE",    glow: true  },
  { label: "Insider Alloc.", value: "0%",       glow: true  },
  { label: "Blockchain",     value: "SOLANA",   glow: false },
  { label: "LP Status",      value: "LOCKED",   glow: false },
]

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const mx = useMotionValue(typeof window !== "undefined" ? window.innerWidth  / 2 : 720)
  const my = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 450)

  useEffect(() => {
    const h = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener("mousemove", h)
    return () => window.removeEventListener("mousemove", h)
  }, [mx, my])

  const W   = typeof window !== "undefined" ? window.innerWidth  : 1440
  const H   = typeof window !== "undefined" ? window.innerHeight : 900
  const px  = useTransform(mx, [0, W], [-18, 18])
  const py  = useTransform(my, [0, H], [-12, 12])
  const spx = useSpring(px, { stiffness: 80, damping: 22 })
  const spy = useSpring(py, { stiffness: 80, damping: 22 })

  const copy = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: 60 }}>
      <Particles />

      {/* Central glow burst */}
      <motion.div
        animate={{ opacity: [0.06, 0.16, 0.06], scale: [0.9, 1.1, 0.9] }}
        transition={{ repeat: Infinity, duration: 5 }}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 600, background: "radial-gradient(ellipse at 50% 50%, rgba(200,255,0,0.08) 0%, transparent 62%)", pointerEvents: "none", zIndex: 0 }}
      />

      {/* Vertical laser */}
      <motion.div
        animate={{ opacity: [0.18, 0.45, 0.18], scaleY: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 1, height: "100%", background: "linear-gradient(to bottom, transparent, rgba(200,255,0,0.3) 40%, rgba(200,255,0,0.1) 80%, transparent)", pointerEvents: "none", zIndex: 1 }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 900, width: "100%", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        {/* Live badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", border: "1px solid rgba(200,255,0,0.28)", borderRadius: 100, background: "rgba(200,255,0,0.07)", marginBottom: 32 }}>
          <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 1.4 }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: C.neon, boxShadow: `0 0 8px ${C.neon}`, display: "inline-block" }} />
          <span style={{ color: C.neon, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", fontFamily: FONTS.body }}>ARROW IS NOW LIVE ON SOLANA</span>
        </motion.div>

        {/* Logo */}
        <motion.div style={{ x: spx, y: spy, marginBottom: 28 }}
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}>
          <motion.div animate={{ filter: [
            "drop-shadow(0 0 14px #C8FF00) drop-shadow(0 0 40px rgba(200,255,0,0.35))",
            "drop-shadow(0 0 28px #C8FF00) drop-shadow(0 0 80px rgba(200,255,0,0.58))",
            "drop-shadow(0 0 14px #C8FF00) drop-shadow(0 0 40px rgba(200,255,0,0.35))",
          ]}} transition={{ repeat: Infinity, duration: 3.5 }}>
            <Logo size={110} />
          </motion.div>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          animate={{ opacity: 1, letterSpacing: "0.42em" }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontFamily: FONTS.display, fontSize: "clamp(32px, 6vw, 74px)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
          ARROW
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          style={{ fontFamily: FONTS.display, fontSize: "clamp(18px, 2.8vw, 34px)", fontWeight: 700, lineHeight: 1.3, marginBottom: 16, maxWidth: 700 }}>
          <span className="shimmer-text">Fair Launch. No Insiders. No Exceptions.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
          style={{ color: C.textLo, fontSize: "clamp(14px, 1.5vw, 17px)", lineHeight: 1.75, maxWidth: 520, marginBottom: 40, fontFamily: FONTS.body }}>
          A Solana community token where everyone entered on equal footing.
          No private allocations. No hidden advantages. The community owns ARROW.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 44 }}>
          <a href="#" className="btn-primary" style={{ padding: "14px 34px", borderRadius: 2, fontFamily: FONTS.body, fontSize: 12 }}>
            <span>▲ BUY ARROW</span>
          </a>
          <a href="#dex" className="btn-ghost" style={{ padding: "14px 34px", borderRadius: 2, fontFamily: FONTS.body, fontSize: 12 }}>
            VIEW CHART
          </a>
        </motion.div>

        {/* Contract Address */}
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          onClick={copy}
          style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 22px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.5)", fontSize: 11, fontFamily: FONTS.mono, letterSpacing: "0.06em", transition: "all 0.2s", marginBottom: 52 }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(200,255,0,0.35)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}>
          <span style={{ color: "rgba(200,255,0,0.55)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", fontFamily: FONTS.body }}>CA</span>
          <span>{CA.slice(0, 10)}...{CA.slice(-6)}</span>
          <span style={{ color: copied ? "#22c55e" : C.neon, fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", fontFamily: FONTS.body }}>
            {copied ? "✓ COPIED" : "COPY"}
          </span>
        </motion.button>

        {/* Stat cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8, width: "100%", maxWidth: 640 }}>
          {STATS.map(s => (
            <motion.div key={s.label} whileHover={{ y: -4, borderColor: "rgba(200,255,0,0.38)" }}
              style={{ padding: "16px 12px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, background: "rgba(255,255,255,0.025)", backdropFilter: "blur(10px)", textAlign: "center", transition: "all 0.25s" }}>
              <div style={{ fontSize: s.glow ? 16 : 14, fontWeight: 800, fontFamily: FONTS.display, color: s.glow ? C.neon : "#fff", textShadow: s.glow ? `0 0 16px ${C.neon}` : "none", letterSpacing: "0.05em", marginBottom: 4 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 10, color: C.textLo, letterSpacing: "0.12em", fontFamily: FONTS.body, fontWeight: 600 }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 2 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(200,255,0,0.5), transparent)" }} />
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, letterSpacing: "0.28em", fontFamily: FONTS.body }}>SCROLL</span>
      </motion.div>
    </section>
  )
}