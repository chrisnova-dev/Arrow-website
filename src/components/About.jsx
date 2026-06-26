import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { C, FONTS, fadeUp, stagger } from "../Constants"

const FEATURES = [
  { icon: "▲", title: "Fair Launch",             desc: "No whitelist. No pre-sale. No VIP entry. Every wallet gets the same price at the same time." },
  { icon: "◎", title: "No Insider Wallets",      desc: "Zero pre-allocated tokens to any insider, team member, or advisor. The ledger doesn't lie." },
  { icon: "◈", title: "No Founder Allocation",   desc: "The founding team enters the market the same way you do. Equal risk, equal reward." },
  { icon: "◐", title: "Transparent Distribution",desc: "Every token's destination is visible on-chain. No hidden wallets, no surprises." },
  { icon: "⬡", title: "Community Driven",        desc: "Governance, direction, and decisions belong to holders. The community is the roadmap." },
  { icon: "◬", title: "Built For The Long Term", desc: "Not designed to pump and dump. Built with architecture that scales as the community grows." },
]

function SectionLabel({ text }) {
  return (
    <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, justifyContent: "center" }}>
      <span style={{ display: "inline-block", width: 24, height: 1, background: C.neon }} />
      <span style={{ color: C.neon, fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", fontFamily: FONTS.body }}>{text}</span>
      <span style={{ display: "inline-block", width: 24, height: 1, background: C.neon }} />
    </motion.div>
  )
}

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="about" style={{ padding: "100px 24px", position: "relative" }}>
      <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}
        style={{ maxWidth: 1100, margin: "0 auto" }}>

        <SectionLabel text="WHY ARROW" />

        <motion.h2 variants={fadeUp} style={{ fontFamily: FONTS.display, fontWeight: 900, fontSize: "clamp(28px, 4vw, 52px)", color: "#fff", lineHeight: 1.1, textAlign: "center" }}>
          A Launch That <span className="neon-text">Actually</span> Respects You
        </motion.h2>

        <motion.p variants={fadeUp} style={{ color: C.textLo, textAlign: "center", margin: "16px auto 52px", fontSize: 15, fontFamily: FONTS.body, maxWidth: 560, lineHeight: 1.72 }}>
          Most token launches quietly reward founders, VCs, and insiders before the public ever gets access.
          ARROW doesn't. Full stop.
        </motion.p>

        {/* Feature grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 12 }}>
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} variants={fadeUp}
              whileHover={{ y: -6, borderColor: "rgba(200,255,0,0.38)" }}
              style={{ padding: "28px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, background: "rgba(255,255,255,0.025)", backdropFilter: "blur(8px)", transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
              {/* Hover top glow line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(200,255,0,0.45), transparent)", opacity: 0, transition: "opacity 0.3s" }}
                onMouseEnter={e => e.target.style.opacity = 1}
                onMouseLeave={e => e.target.style.opacity = 0} />
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <motion.div animate={{ opacity: [0.55, 1, 0.55] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.38 }}
                  style={{ fontSize: 22, color: C.neon, flexShrink: 0, marginTop: 2 }}>
                  {f.icon}
                </motion.div>
                <div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: FONTS.body, marginBottom: 8, letterSpacing: "0.02em" }}>{f.title}</h3>
                  <p  style={{ color: C.textLo, fontSize: 13, fontFamily: FONTS.body, lineHeight: 1.66 }}>{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zero allocation callout */}
        <motion.div variants={fadeUp}
          style={{ marginTop: 36, padding: "28px 32px", border: "1px solid rgba(200,255,0,0.12)", borderRadius: 8, background: "rgba(200,255,0,0.03)", display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-around", alignItems: "center" }}>
          {["0% Insider Allocation", "0% Founder Allocation", "0% VC Allocation"].map(t => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 22, height: 22, borderRadius: 4, background: C.neon, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <polyline points="1.5,6 4.5,9 10.5,3" stroke="#050505" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.78)", fontSize: 13, fontFamily: FONTS.body, fontWeight: 600 }}>{t}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}