import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, FONTS, fadeUp, stagger } from "../Constants";

const CARDS = [
  {
    platform: "𝕏 Twitter",
    handle: "@arrowsolana",
    desc: "Latest updates, community highlights, and launch news.",
    action: "FOLLOW",
    href: "https://x.com/thearrowhq?s=21",
    featured: false,
  },
  {
    platform: "Telegram",
    handle: "t.me/arrowsolana",
    desc: "Real-time alpha, official announcements, community chat.",
    action: "JOIN",
    href: "https://t.me/ARROWportal",
    featured: true,
  },
  {
    platform: "Birdeye",
    handle: "Analytics",
    desc: "Deep holder analytics and market intelligence for ARROW.",
    action: "ANALYZE",
    href: "https://birdeye.so/token/71waYGNCMRZ3zsc7K81JTTk2E9etAhQiGiPbYYtNBGhp?chain=solana",
    featured: false,
  },
];

function SectionLabel({ text }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 16,
        justifyContent: "center",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 24,
          height: 1,
          background: C.neon,
        }}
      />
      <span
        style={{
          color: C.neon,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.28em",
          fontFamily: FONTS.body,
        }}
      >
        {text}
      </span>
      <span
        style={{
          display: "inline-block",
          width: 24,
          height: 1,
          background: C.neon,
        }}
      />
    </motion.div>
  );
}

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="community"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Outer glow container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            position: "relative",
            border: "1px solid rgba(200,255,0,0.15)",
            borderRadius: 14,
            overflow: "hidden",
            padding: "clamp(40px, 6vw, 72px) clamp(24px, 4vw, 48px)",
          }}
        >
          {/* Bg radial glow */}
          <motion.div
            animate={{ opacity: [0.07, 0.2, 0.07], scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 7 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(200,255,0,0.1) 0%, transparent 66%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
          >
            <SectionLabel text="JOIN US" />

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: FONTS.display,
                fontWeight: 900,
                fontSize: "clamp(28px, 4vw, 52px)",
                color: "#fff",
                lineHeight: 1.1,
                textAlign: "center",
              }}
            >
              The Community <span className="neon-text">Is ARROW</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                color: C.textLo,
                textAlign: "center",
                margin: "16px auto 48px",
                fontSize: 15,
                fontFamily: FONTS.body,
                maxWidth: 460,
                lineHeight: 1.72,
              }}
            >
              Every channel is official. Every post matters. Get in and stay
              connected — the community moves first.
            </motion.p>

            {/* Social cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 10,
                position: "relative",
                zIndex: 1,
              }}
            >
              {CARDS.map((card) => (
                <motion.a
                  key={card.platform}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  whileHover={{ y: -8, borderColor: "rgba(200,255,0,0.52)" }}
                  style={{
                    display: "block",
                    padding: "24px",
                    border: card.featured
                      ? "1px solid rgba(200,255,0,0.32)"
                      : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    background: card.featured
                      ? "rgba(200,255,0,0.07)"
                      : "rgba(255,255,255,0.025)",
                    boxShadow: card.featured
                      ? "0 0 30px rgba(200,255,0,0.09)"
                      : "none",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 15,
                      color: "#fff",
                      fontFamily: FONTS.body,
                      marginBottom: 4,
                    }}
                  >
                    {card.platform}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: C.neon,
                      fontFamily: FONTS.mono,
                      marginBottom: 10,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {card.handle}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: C.textLo,
                      fontFamily: FONTS.body,
                      lineHeight: 1.65,
                      marginBottom: 18,
                    }}
                  >
                    {card.desc}
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      border: "1px solid rgba(200,255,0,0.3)",
                      borderRadius: 4,
                      color: C.neon,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      fontFamily: FONTS.body,
                    }}
                  >
                    {card.action} →
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
