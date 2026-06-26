import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/* ── CINEMATIC BACKGROUND ── */
const BEAMS = [
  { left: "18%", delay: "0s",   dur: "10s", h: "140vh" },
  { left: "50%", delay: "3s",   dur: "14s", h: "120vh" },
  { left: "80%", delay: "6s",   dur: "12s", h: "150vh" },
  { left: "34%", delay: "1.5s", dur: "16s", h: "110vh" },
  { left: "65%", delay: "4.5s", dur: "11s", h: "130vh" },
]
const ORBS = [
  { top: "10%", left: "15%", size: 520, delay: "0s"   },
  { top: "60%", left: "76%", size: 420, delay: "3s"   },
  { top: "35%", left: "50%", size: 640, delay: "1.5s" },
  { top: "85%", left: "20%", size: 360, delay: "4s"   },
]

export function CinematicBg() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>

      {/* Black base */}
      <div style={{ position: "absolute", inset: 0, background: "#050505" }} />

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,255,0,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,255,0,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }} />

      {/* Laser beams */}
      {BEAMS.map((b, i) => (
        <div key={i} className="beam" style={{
          position: "absolute", left: b.left, top: "-10vh",
          width: "1px", height: b.h,
          background: "linear-gradient(to bottom, transparent, rgba(200,255,0,0.18), rgba(200,255,0,0.06), transparent)",
          transform: "rotate(-35deg)", transformOrigin: "top center",
          animationDelay: b.delay, animationDuration: b.dur,
        }} />
      ))}

      {/* Glow orbs */}
      {ORBS.map((o, i) => (
        <div key={i} className="orb-float" style={{
          position: "absolute", top: o.top, left: o.left,
          width: o.size, height: o.size,
          background: "radial-gradient(circle, rgba(200,255,0,0.055) 0%, transparent 65%)",
          borderRadius: "50%", transform: "translate(-50%,-50%)",
          animationDelay: o.delay,
        }} />
      ))}

      {/* Top focal glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 860, height: 520,
        background: "radial-gradient(ellipse at 50% 0%, rgba(200,255,0,0.09) 0%, transparent 70%)",
      }} />

      {/* Animated fog */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], x: [0, 28, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(200,255,0,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,5,5,0.72) 100%)",
      }} />
    </div>
  )
}

/* ── SCROLL PROGRESS BAR ── */
export function ScrollBar() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const h = () => {
      const s = document.documentElement.scrollTop
      const t = document.documentElement.scrollHeight - window.innerHeight
      setP(t > 0 ? s / t : 0)
    }
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 1000, background: "rgba(255,255,255,0.05)" }}>
      <motion.div style={{ height: "100%", width: `${p * 100}%`, background: "#C8FF00", boxShadow: "0 0 8px #C8FF00" }} />
    </div>
  )
}

/* ── CUSTOM ARROW CURSOR ── */
// export function Cursor() {
//   const x  = useMotionValue(0)
//   const y  = useMotionValue(0)
//   const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 })
//   const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 })
//   const [clicking, setClicking] = useState(false)
//   const [visible,  setVisible]  = useState(false)

//   useEffect(() => {
//     const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
//     const show = () => setVisible(true)
//     const hide = () => setVisible(false)
//     const dn   = () => setClicking(true)
//     const up   = () => setClicking(false)
//     window.addEventListener("mousemove", move)
//     document.addEventListener("mouseenter", show)
//     document.addEventListener("mouseleave", hide)
//     document.addEventListener("mousedown",  dn)
//     document.addEventListener("mouseup",    up)
//     return () => {
//       window.removeEventListener("mousemove", move)
//       document.removeEventListener("mouseenter", show)
//       document.removeEventListener("mouseleave", hide)
//       document.removeEventListener("mousedown",  dn)
//       document.removeEventListener("mouseup",    up)
//     }
//   }, [x, y])

//   if (!visible) return null
//   return (
//     <motion.div style={{
//       position: "fixed", top: 0, left: 0,
//       x: sx, y: sy, translateX: "-50%", translateY: "-50%",
//       pointerEvents: "none", zIndex: 9999,
//       scale: clicking ? 0.7 : 1,
//     }}>
//       <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//         <defs>
//           <filter id="cur-g">
//             <feGaussianBlur stdDeviation="2.5" result="b" />
//             <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
//           </filter>
//         </defs>
//         <g filter="url(#cur-g)">
//           <polygon points="14,2 24,22 14,18 4,22"
//             stroke="#C8FF00" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(200,255,0,0.08)" />
//           <line x1="14" y1="10" x2="14" y2="26"
//             stroke="#C8FF00" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
//         </g>
//       </svg>
//     </motion.div>
//   )
// }