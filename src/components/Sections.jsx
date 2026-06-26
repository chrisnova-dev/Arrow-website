import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel, SectionHeading, Reveal, LogoSVG } from "./CommonElements";
import { C, FONTS, CA } from "../styles/global";

export function About() {
  const cards = [
    { title: "ZERO INSIDERS", desc: "No tokens are set aside for dev squads, promoters, or seed-stage VCs. Everyone buys on market open." },
    { title: "LIQUIDITY LOCKED", desc: "100% of initial pool liquidity tokens are instantly burned to ensure absolute, un-ruggable protection." },
    { title: "SOLANA POWERED", desc: "Engineered on Solana for lightning-fast order matching speeds and fractions-of-a-cent execution fees." }
  ];

  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal>
        <SectionLabel>MANIFESTO</SectionLabel>
        <SectionHeading style={{ marginBottom: 48 }}>PURE DISTRIBUTED IDENTITY</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {cards.map((c, i) => (
            <div key={i} style={{ padding: 32, background: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}`, borderRadius: 4, transition: "border-color 0.3s" }}
                 onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(200,255,0,0.3)"}
                 onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
              <h3 style={{ fontFamily: FONTS.display, color: C.neon, marginBottom: 12, fontSize: 16, letterSpacing: "0.1em" }}>{c.title}</h3>
              <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Tokenomics() {
  const metrics = [
    { label: "TOTAL SUPPLY", value: "1,000,000,000" },
    { label: "FAIR LAUNCH ALLOCATION", value: "100%" },
    { label: "TAX STRUCTURE", value: "0% BUY / 0% SELL" },
    { label: "CONTRACT AUTHORITY", value: "REVOKED / IMMUTABLE" }
  ];

  return (
    <section id="tokenomics" style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal>
        <SectionLabel>METRICS</SectionLabel>
        <SectionHeading style={{ marginBottom: 48 }}>TRANSPARENT DISTRIBUTION</SectionHeading>
        <div style={{ background: "rgba(200,255,0,0.02)", border: `1px solid ${C.borderG}`, padding: 32, borderRadius: 4 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 10, color: C.textLo, letterSpacing: "0.1em", marginBottom: 8 }}>{m.label}</div>
                <div style={{ fontFamily: FONTS.display, fontSize: 20, color: "#fff", fontWeight: 700, letterSpacing: "0.05em" }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Roadmap() {
  const phases = [
    { tag: "PHASE 01", title: "FAIR STEALTH STEW", desc: "Initial production architecture setup and zero-allocation smart contract verification on Solana mainnet." },
    { tag: "PHASE 02", title: "LIQUIDITY IGNITION", desc: "Decentralized AMM pool initiation with 100% LP burner matching arrays deployed instantly." },
    { tag: "PHASE 03", title: "AUTONOMOUS EXPANSION", desc: "Community matrix node maturation, direct index tracking integration, and cultural ecosystem amplification." }
  ];

  return (
    <section id="roadmap" style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal>
        <SectionLabel>THE TRAJECTORY</SectionLabel>
        <SectionHeading style={{ marginBottom: 56 }}>SYSTEM ROADMAP</SectionHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 40, position: "relative" }}>
          {phases.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 24, borderLeft: `2px solid ${C.neonDim}`, paddingLeft: 24, position: "relative" }}>
              <div style={{ position: "absolute", left: -6, top: 2, width: 10, height: 10, borderRadius: "50%", background: C.neon, boxShadow: `0 0 8px ${C.neon}` }} />
              <div>
                <span style={{ fontFamily: FONTS.mono, fontSize: 10, color: C.neon, fontWeight: 700, letterSpacing: "0.15em" }}>{p.tag}</span>
                <h4 style={{ fontFamily: FONTS.display, color: "#fff", margin: "4px 0 8px 0", fontSize: 16, letterSpacing: "0.05em" }}>{p.title}</h4>
                <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.6, maxWidth: 600 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, padding: "16px 0" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", cursor: "none", color: "#fff", textAlign: "left" }}>
        <span style={{ fontFamily: FONTS.display, fontSize: 14, fontWeight: 600, letterSpacing: "0.05em" }}>{q}</span>
        <span style={{ color: C.neon, fontSize: 16 }}>{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
            <p style={{ color: C.textMid, fontSize: 13, lineHeight: 1.6, padding: "8px 0 16px 0" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const items = [
    { q: "HOW DO I KNOW THIS IS A PURE FAIR LAUNCH?", a: "The launch token pool configuration parameters completely lack pre-mines, founder pools, or technical advisory provisions. All liquidity provision primitives are immediately routed to raw burn contracts." },
    { q: "WHAT IS THE CONTRACT ADDRESS?", a: `The official immutable project fingerprint contract hash address is ${CA}. Check and verify across all explorer layers.` },
    { q: "HOW CAN I JOIN THE COMMUNITY MATRIX?", a: "Connect directly into our Telegram cluster node network arrays or follow global informational update broad-beams on X." }
  ];

  return (
    <section id="faq" style={{ padding: "100px 24px", maxWidth: 750, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal>
        <SectionLabel>KNOWLEDGE REPOSITORY</SectionLabel>
        <SectionHeading style={{ marginBottom: 48 }}>COMMON INQUIRIES</SectionHeading>
        <div>
          {items.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </Reveal>
    </section>
  );
}

export function Community() {
  return (
    <section id="community" style={{ padding: "120px 24px", textBreak: "center", position: "relative", zIndex: 2, textAlign: "center" }}>
      <Reveal>
        <SectionLabel>COMMUNITY ACCELERATION</SectionLabel>
        <SectionHeading style={{ marginBottom: 16 }}>ENTER THE NODE ARCHIVE</SectionHeading>
        <p style={{ color: C.textLo, maxWidth: 500, margin: "0 auto 32px auto", fontSize: 14, lineHeight: 1.6 }}>
          Join the community grid assembly. Synchronize coordinates across distributed real-time transmission vectors.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "14px 28px", borderRadius: 2, textDecoration: "none" }}>
            <span>CONNECT VIA X</span>
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: "14px 28px", borderRadius: 2, textDecoration: "none" }}>
            TELEGRAM CHANNEL
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "40px 24px", textAlign: "center", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <LogoSVG size={24} />
          <span style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", color: "#fff" }}>ARROW PROJECT</span>
        </div>
        <div style={{ color: C.textLo, fontSize: 10, fontFamily: FONTS.mono, letterSpacing: "0.05em" }}>
          &copy; {new Date().getFullYear()} ARROW. ALL INTELLECT PREROGATIVES RETAINED. IMMUTABLE COMMERCE ROOT.
        </div>
      </div>
    </footer>
  );
}