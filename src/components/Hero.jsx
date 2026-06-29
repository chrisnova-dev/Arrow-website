import { useState } from "react";
import { motion } from "framer-motion";
import { C, FONTS, CA } from "../Constants";

/* ── Logo SVG ── */
function Logo({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <filter id="hero-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#hero-glow)">
        <polyline
          points="32,6 54,46 32,38 10,46"
          stroke="#C8FF00"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(200,255,0,0.07)"
        />
        <line
          x1="32"
          y1="20"
          x2="32"
          y2="58"
          stroke="#C8FF00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 5"
          opacity="0.45"
        />
        <polyline
          points="32,14 48,42 32,36 16,42"
          stroke="rgba(200,255,0,0.25)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

const STATS = [
  { label: "Launch Status", value: "LIVE", glow: true },
  { label: "Insider Alloc.", value: "0%", glow: true },
  { label: "Blockchain", value: "SOLANA", glow: false },
  { label: "LP Status", value: "LOCKED", glow: false },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "transparent", // ── CRITICAL FIX: Allows CinematicBg lights to show through ──
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 60,
      }}
    >
      {/* Content Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          width: "100%",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 18px",
            border: "1px solid rgba(200,255,0,0.28)",
            borderRadius: 100,
            background: "rgba(200,255,0,0.07)",
            marginBottom: 32,
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: C.neon,
              boxShadow: `0 0 8px ${C.neon}`,
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: C.neon,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.22em",
              fontFamily: FONTS.body,
            }}
          >
            ARROW IS NOW LIVE ON SOLANA
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 28 }}
        >
          <Logo size={100} />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.8em" }}
          animate={{ opacity: 1, letterSpacing: "0.42em" }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(32px, 6vw, 74px)",
            fontWeight: 900,
            color: "#fff",
            marginBottom: 14,
          }}
        >
          ARROW
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(18px, 2.8vw, 34px)",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: 16,
            maxWidth: 700,
            color: "#fff",
          }}
        >
          A Fair Launch for Everyone
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          style={{
            color: C.textLo,
            fontSize: "clamp(14px, 1.5vw, 17px)",
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: 40,
            fontFamily: FONTS.body,
          }}
        >
          ARROW is a community-driven Solana token built around transparency,
          equal access, and long-term holders.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 44,
          }}
        >
          <a
            href="#"
            className="btn-primary"
            style={{
              padding: "14px 34px",
              borderRadius: 2,
              fontFamily: FONTS.body,
              fontSize: 12,
            }}
          >
            <span>▲ BUY ARROW</span>
          </a>
          <a
            href="#dex"
            className="btn-ghost"
            style={{
              padding: "14px 34px",
              borderRadius: 2,
              fontFamily: FONTS.body,
              fontSize: 12,
            }}
          >
            VIEW CHART
          </a>
        </motion.div>

        {/* Contract Address */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={copy}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 22px",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 4,
            background: "rgba(255,255,255,0.02)",
            color: "rgba(255,255,255,0.5)",
            fontSize: 11,
            fontFamily: FONTS.mono,
            letterSpacing: "0.06em",
            transition: "all 0.2s",
            marginBottom: 52,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "rgba(200,255,0,0.35)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
          }
        >
          <span
            style={{
              color: "rgba(200,255,0,0.55)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.2em",
              fontFamily: FONTS.body,
            }}
          >
            CA
          </span>
          <span>
            {CA.slice(0, 10)}...{CA.slice(-6)}
          </span>
          <span
            style={{
              color: copied ? "#22c55e" : C.neon,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              fontFamily: FONTS.body,
            }}
          >
            {copied ? "✓ COPIED" : "COPY"}
          </span>
        </motion.button>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 8,
            width: "100%",
            maxWidth: 640,
          }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              style={{
                padding: "16px 12px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 6,
                background: "rgba(255,255,255,0.025)",
                textAlign: "center",
                transition: "all 0.25s",
              }}
            >
              <div
                style={{
                  fontSize: s.glow ? 16 : 14,
                  fontWeight: 800,
                  fontFamily: FONTS.display,
                  color: s.glow ? C.neon : "#fff",
                  textShadow: s.glow ? `0 0 16px ${C.neon}` : "none",
                  letterSpacing: "0.05em",
                  marginBottom: 4,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: C.textLo,
                  letterSpacing: "0.12em",
                  fontFamily: FONTS.body,
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}