import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { C, FONTS, fadeUp, stagger } from "../Constants";

const ITEMS = [
  {
    q: "What is ARROW?",
    a: "ARROW is a fair-launch token on Solana where every participant starts on equal footing. There are no presales, no insider allocations, and no special access before launch. Ownership is earned in the open market.",
  },
  {
    q: "What makes ARROW different?",
    a: "Most projects reward insiders before the public arrives. ARROW doesn't. Every holder buys the same way after launch, making ownership transparent, fair, and earned.",
  },
  {
    q: "Who owns ARROW?",
    a: "The community. After launch, ownership belongs to whoever buys and holds. The more you invest in the project and contribute to its growth, the greater your influence becomes.",
  },
  {
    q: "Does the team have reserved tokens?",
    a: "No. There are no founder allocations or insider wallets. If the team wants more ARROW, they buy it on the open market just like everyone else.",
  },
  {
    q: "Why does ARROW encourage holding?",
    a: "Large holders have more reason to help the project succeed because their success is tied to the community's success. ARROW rewards long-term participation instead of short-term speculation.",
  },
  {
    q: "What blockchain is ARROW built on?",
    a: "ARROW is built on Solana, providing fast transactions, low fees, and an ecosystem that makes fair launches accessible to everyone.",
  },
  {
    q: "How can I become part of ARROW?",
    a: "Buy ARROW on the open market, join the community, contribute however you can, and grow alongside other holders. In ARROW, participation matters.",
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

export default function Faq() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" style={{ padding: "100px 24px", position: "relative" }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={stagger}
        style={{ maxWidth: 720, margin: "0 auto" }}
      >
        <SectionLabel text="FAQ" />

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: FONTS.display,
            fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#fff",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Common <span className="neon-text">Questions</span>
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "18px 20px",
                  border: `1px solid ${open === i ? "rgba(200,255,0,0.3)" : "rgba(255,255,255,0.07)"}`,
                  borderBottom: open === i ? "none" : undefined,
                  borderRadius: open === i ? "8px 8px 0 0" : 8,
                  background:
                    open === i
                      ? "rgba(200,255,0,0.04)"
                      : "rgba(255,255,255,0.02)",
                  color: open === i ? "#fff" : C.textMid,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  transition: "all 0.25s",
                  fontFamily: FONTS.body,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {item.q}
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    color: C.neon,
                    fontSize: 22,
                    lineHeight: 1,
                    flexShrink: 0,
                    fontWeight: 300,
                  }}
                >
                  +
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        padding: "16px 20px 22px",
                        border: "1px solid rgba(200,255,0,0.2)",
                        borderTop: "none",
                        borderRadius: "0 0 8px 8px",
                        background: "rgba(200,255,0,0.025)",
                        color: C.textLo,
                        fontSize: 13,
                        fontFamily: FONTS.body,
                        lineHeight: 1.72,
                      }}
                    >
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
