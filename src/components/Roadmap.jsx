import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, FONTS, fadeUp, stagger } from "../Constants";

const PHASES = [
  {
    num: "01",
    title: "Fair Launch",
    active: true,
    items: [
      "No presale or whitelist",
      "No insider allocations",
      "Everyone entered at the same price",
      "Ownership starts after launch",
    ],
  },
  {
    num: "02",
    title: "Earn Your Position",
    active: false,
    items: [
      "Buy on the open market",
      "Support the community",
      "Build alongside other holders",
      "Influence is earned, not given",
    ],
  },
  {
    num: "03",
    title: "Community Ownership",
    active: false,
    items: [
      "Large holders gain more influence",
      "Contributors help shape the future",
      "Open participation for everyone",
      "No permission required to contribute",
    ],
  },
  {
    num: "04",
    title: "Built to Last",
    active: false,
    items: [
      "Long-term holder mindset",
      "Organic community growth",
      "Transparent on-chain ownership",
      "The community writes the future",
    ],
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

function PhaseCard({ phase, align = "left" }) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(200,255,0,0.42)" }}
      style={{
        padding: "24px",
        border: phase.active
          ? "1px solid rgba(200,255,0,0.28)"
          : "1px solid rgba(255,255,255,0.07)",
        borderRadius: 8,
        background: phase.active
          ? "rgba(200,255,0,0.05)"
          : "rgba(255,255,255,0.025)",
        textAlign: align,
        transition: "all 0.3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 10,
          justifyContent: align === "right" ? "flex-end" : "flex-start",
        }}
      >
        <span
          style={{
            color: C.neon,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.22em",
            fontFamily: FONTS.body,
          }}
        >
          PHASE {phase.num}
        </span>
        {phase.active && (
          <span
            style={{
              padding: "2px 8px",
              background: "rgba(200,255,0,0.1)",
              border: "1px solid rgba(200,255,0,0.28)",
              borderRadius: 100,
              color: C.neon,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.14em",
              fontFamily: FONTS.body,
            }}
          >
            ACTIVE
          </span>
        )}
      </div>
      <h3
        style={{
          color: "#fff",
          fontWeight: 800,
          fontSize: 18,
          fontFamily: FONTS.display,
          marginBottom: 12,
        }}
      >
        {phase.title}
      </h3>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: align === "right" ? "flex-end" : "flex-start",
        }}
      >
        {phase.items.map((item) => (
          <li
            key={item}
            style={{
              color: C.textLo,
              fontSize: 12,
              fontFamily: FONTS.body,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {align === "left" && (
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(200,255,0,0.45)",
                  flexShrink: 0,
                }}
              />
            )}
            {item}
            {align === "right" && (
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(200,255,0,0.45)",
                  flexShrink: 0,
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Roadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="roadmap"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={stagger}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <SectionLabel text="THE ARROW WAY" />

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
          The ARROW <span className="neon-text">Philosophy</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            color: C.textLo,
            textAlign: "center",
            margin: "16px auto 56px",
            fontSize: 15,
            fontFamily: FONTS.body,
            maxWidth: 420,
            lineHeight: 1.7,
          }}
        >
          Built on fairness, ownership, and community—not promises.
        </motion.p>

        <div style={{ position: "relative" }}>
          {/* Center vertical line — desktop only */}
          <div
            className="road-center-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, rgba(200,255,0,0.45), rgba(200,255,0,0.12), transparent)",
              transform: "translateX(-50%)",
            }}
          />
          {/* Mobile left line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, rgba(200,255,0,0.4), rgba(200,255,0,0.1), transparent)",
              display: "block",
            }}
            className="mobile-line"
          />

          <style>{`.mobile-line { display: block; } @media(min-width:640px){ .mobile-line{ display:none!important; } }`}</style>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {PHASES.map((phase, i) => (
              <motion.div key={phase.num} variants={fadeUp}>
                {/* DESKTOP: alternating left/right */}
                <div style={{ display: "none" }} className="desktop-row">
                  <style>{`.desktop-row{ display:none; } @media(min-width:640px){ .desktop-row{ display:grid!important; grid-template-columns:1fr 60px 1fr; align-items:center; margin-bottom:24px; } }`}</style>

                  {/* Left slot */}
                  <div style={{ paddingRight: 32 }}>
                    {i % 2 === 0 && <PhaseCard phase={phase} align="right" />}
                  </div>

                  {/* Center dot */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        border: `2px solid ${C.neon}`,
                        background: "#050505",
                        position: "relative",
                        zIndex: 2,
                        boxShadow: phase.active ? `0 0 18px ${C.neon}` : "none",
                      }}
                    >
                      {phase.active && (
                        <motion.div
                          animate={{
                            scale: [1, 2.3, 1],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            background: C.neon,
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Right slot */}
                  <div style={{ paddingLeft: 32 }}>
                    {i % 2 !== 0 && <PhaseCard phase={phase} align="left" />}
                  </div>
                </div>

                {/* MOBILE: stacked */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                    paddingLeft: 44,
                    marginBottom: 20,
                  }}
                  className="mobile-row"
                >
                  <style>{`.mobile-row{ display:flex; } @media(min-width:640px){ .mobile-row{ display:none!important; } }`}</style>
                  <div
                    style={{
                      position: "absolute",
                      left: 12,
                      marginTop: 20,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      border: `2px solid ${C.neon}`,
                      background: "#050505",
                      zIndex: 2,
                      boxShadow: phase.active ? `0 0 14px ${C.neon}` : "none",
                    }}
                  >
                    {phase.active && (
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "50%",
                          background: C.neon,
                        }}
                      />
                    )}
                  </div>
                  <PhaseCard phase={phase} align="left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
