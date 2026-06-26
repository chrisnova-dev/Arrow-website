const ITEMS = [
  "✓ No Insider Wallets",
  "✓ No Founder Allocation",
  "✓ No VC Allocation",
  "✓ Community First",
  "✓ Fair Launch",
  "✓ Built On Solana",
  "✓ Transparent Distribution",
  "✓ Equal Entry For All",
  "✓ Liquidity Locked",
  "✓ Contract Verified",
]

export default function Ticker() {
  const items = [...ITEMS, ...ITEMS]
  return (
    <div style={{
      position: "relative", zIndex: 50, height: 36,
      background: "rgba(200,255,0,0.06)",
      borderBottom: "1px solid rgba(200,255,0,0.12)",
      overflow: "hidden", display: "flex", alignItems: "center",
    }}>
      {/* Left fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #050505, transparent)", zIndex: 2, pointerEvents: "none" }} />
      {/* Right fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #050505, transparent)", zIndex: 2, pointerEvents: "none" }} />

      <div style={{ display: "flex", animation: "ticker 32s linear infinite", whiteSpace: "nowrap" }}>
        {items.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{
              color: "#C8FF00", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em", fontFamily: "'Space Grotesk', sans-serif",
              padding: "0 28px",
            }}>{t}</span>
            <span style={{ color: "rgba(200,255,0,0.3)", fontSize: 10 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}