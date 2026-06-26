import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, FONTS, fadeUp, stagger } from "../Constants";

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

export default function Tokenomics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tokenomics"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          style={{ maxWidth: 580, margin: "0 auto" }}
        >
          <SectionLabel text="TOKENOMICS" />

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
            Launch <span className="neon-text">Principles</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              color: C.textLo,
              textAlign: "center",
              margin: "16px auto 52px",
              fontSize: 15,
              fontFamily: FONTS.body,
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            Factual on-chain metrics. No artificial distributions, no guesswork.
          </motion.p>

          {/* Factual Token Data Cards Container */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {/* Zero-Allocation Badges */}
            {[
              { label: "Insider Allocation", val: "0%" },
              { label: "Founder Allocation", val: "0%" },
              { label: "VC Allocation", val: "0%" },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  border: "1px solid rgba(200,255,0,0.12)",
                  borderRadius: 6,
                  background: "rgba(200,255,0,0.02)",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 13,
                    fontFamily: FONTS.body,
                    fontWeight: 600,
                  }}
                >
                  {b.label}
                </span>
                <span
                  style={{
                    color: C.neon,
                    fontSize: 14,
                    fontWeight: 900,
                    fontFamily: FONTS.mono,
                  }}
                >
                  {b.val}
                </span>
              </div>
            ))}

            {/* Bottom Core Specs Card */}
            <div
              style={{
                marginTop: 8,
                padding: "20px 18px",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 6,
                background: "rgba(255,255,255,0.015)",
                fontFamily: FONTS.mono,
                fontSize: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)" }}>Network</span>
                <span style={{ color: "#fff", fontWeight: 700 }}>Solana</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)" }}>
                  Launch Type
                </span>
                <span style={{ color: "#fff", fontWeight: 700 }}>
                  Fair Launch
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)" }}>
                  Liquidity Pool
                </span>
                <span style={{ color: C.neon, fontWeight: 700 }}>
                  100% Locked
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)" }}>
                  Ownership Status
                </span>
                <span style={{ color: "#fff", fontWeight: 700 }}>
                  Community Driven
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>Contract</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
                  Verified On-Chain
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
