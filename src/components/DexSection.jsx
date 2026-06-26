import { useRef, useEffect, useState } from "react";
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

const METRICS = (stats) => [
  {
    label: "Price",
    value: stats.price,
    sub: "Current price",
  },
  {
    label: "Market Cap",
    value: stats.marketCap,
    sub: "Live market cap",
  },
  {
    label: "Holders",
    value: stats.holders,
    sub: "Unique wallets",
  },
  {
    label: "Liquidity",
    value: stats.liquidity,
    sub: "Locked liquidity",
  },
];

export default function DexSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [stats, setStats] = useState({
    price: "--",
    marketCap: "--",
    liquidity: "--",
    holders: "--",
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(
          "https://api.dexscreener.com/latest/dex/pairs/solana/G11y911Nkrzewv5QcupoiEesu3J9U5FMj19GUiFsAqYV"
        );

        const data = await res.json();
        
        // FIX: DexScreener returns an array wrapper named "pairs"
        if (data && data.pairs && data.pairs.length > 0) {
          const pair = data.pairs[0];

          setStats({
            price: pair.priceUsd ? `$${Number(pair.priceUsd).toFixed(8)}` : "--",
            marketCap: `$${Number(pair.marketCap || pair.fdv || 0).toLocaleString()}`,
            liquidity: pair.liquidity && pair.liquidity.usd ? `$${Math.round(pair.liquidity.usd).toLocaleString()}` : "--",
            holders: "--", // DexScreener API endpoint doesn't serve holder counts directly
          });
        }
      } catch (err) {
        console.error("DexScreener fetch error:", err);
      }
    }

    fetchStats();

    const interval = setInterval(fetchStats, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dex" style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={stagger}
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <SectionLabel text="LIVE CHART" />

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
          Track <span className="neon-text">ARROW</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            color: C.textLo,
            textAlign: "center",
            margin: "16px auto 48px",
            fontSize: 15,
            fontFamily: FONTS.body,
            maxWidth: 440,
            lineHeight: 1.7,
          }}
        >
          Real-time price data and on-chain analytics — live now on Solana.
        </motion.p>

        {/* Chart card */}
        <motion.div
          variants={fadeUp}
          style={{
            border: "1px solid rgba(200,255,0,0.2)",
            borderRadius: 10,
            overflow: "hidden",
            background: "rgba(200,255,0,0.03)",
            marginBottom: 16,
            position: "relative",
            zIndex: 5,
          }}
        >
          {/* Chart header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(200,255,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
                <polyline
                  points="32,6 54,46 32,38 10,46"
                  stroke="#C8FF00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="rgba(200,255,0,0.07)"
                />
              </svg>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  fontFamily: FONTS.body,
                }}
              >
                ARROW / USDT
              </span>
              <span
                style={{
                  padding: "2px 8px",
                  background: "rgba(200,255,0,0.1)",
                  border: "1px solid rgba(200,255,0,0.2)",
                  borderRadius: 100,
                  color: C.neon,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                SOLANA
              </span>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.neon,
                  boxShadow: `0 0 6px ${C.neon}`,
                  display: "inline-block",
                }}
              />
            </div>
            <a
              href="https://dexscreener.com/solana/G11y911Nkrzewv5QcupoiEesu3J9U5FMj19GUiFsAqYV"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: C.textLo,
                fontSize: 11,
                fontFamily: FONTS.mono,
                textDecoration: "none",
                cursor: "pointer",
                position: "relative",
                zIndex: 10,
              }}
              onMouseEnter={(e) => (e.target.style.color = C.neon)}
              onMouseLeave={(e) => (e.target.style.color = C.textLo)}
            >
              OPEN ON DEXSCREENER →
            </a>
          </div>

          {/* Chart area */}
          <div style={{ width: "100%", height: 500, position: "relative", zIndex: 5 }}>
            <iframe
              src="https://dexscreener.com/solana/G11y911Nkrzewv5QcupoiEesu3J9U5FMj19GUiFsAqYV?embed=1&theme=dark"
              title="ARROW Chart"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </motion.div>

        {/* Metric cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 8,
          }}
        >
          {METRICS(stats).map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              whileHover={{ borderColor: "rgba(200,255,0,0.3)", y: -4 }}
              style={{
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 6,
                background: "rgba(255,255,255,0.025)",
                transition: "all 0.25s",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 18,
                  fontFamily: FONTS.display,
                  marginBottom: 4,
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  color: C.textMid,
                  fontSize: 11,
                  fontFamily: FONTS.body,
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  color: C.textLo,
                  fontSize: 10,
                  fontFamily: FONTS.body,
                }}
              >
                {m.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buy links */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            marginTop: 24,
            flexWrap: "wrap",
            position: "relative",
            zIndex: 10,
          }}
        >
          {[
            { label: "Buy on Jupiter", href: "https://jup.ag/tokens/71waYGNCMRZ3zsc7K81JTTk2E9etAhQiGiPbYYtNBGhp" },
            { label: "Buy on Raydium", href: "https://raydium.io" },
            { label: "View Birdeye", href: "https://birdeye.so/token/71waYGNCMRZ3zsc7K81JTTk2E9etAhQiGiPbYYtNBGhp?chain=solana" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                padding: "10px 20px",
                borderRadius: 2,
                fontFamily: FONTS.body,
                fontSize: 11,
                cursor: "pointer",
              }}
            >
              {l.label} →
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}