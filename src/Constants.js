export const CA = "71waYGNCMRZ3zsc7K81JTTk2E9etAhQiGiPbYYtNBGhp";

export const C = {
  neon: "#C8FF00",
  black: "#050505",
  textLo: "rgba(255,255,255,0.35)",
  textMid: "rgba(255,255,255,0.60)",
};

export const FONTS = {
  display: "'Orbitron', 'Space Grotesk', sans-serif",
  body: "'Space Grotesk', system-ui, sans-serif",
  mono: "'Space Mono', 'Courier New', monospace",
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; background: #050505; }
body { background: #050505; overflow-x: hidden; }

::-webkit-scrollbar       { width: 3px; }
::-webkit-scrollbar-track { background: #050505; }
::-webkit-scrollbar-thumb { background: #C8FF00; border-radius: 2px; }
::selection               { background: rgba(200,255,0,0.25); color: #fff; }

@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes beam-drift {
  0%,100% { opacity: 0.06; transform: rotate(-35deg) translateY(0px); }
  50%      { opacity: 0.14; transform: rotate(-35deg) translateY(-40px); }
}
@keyframes fog-drift {
  0%,100% { transform: translateX(0) scale(1); opacity: 0.4; }
  50%      { transform: translateX(30px) scale(1.08); opacity: 0.7; }
}
@keyframes orb-float {
  0%,100% { transform: translate(-50%,-50%) translateY(0px); }
  33%      { transform: translate(-50%,-50%) translateY(-18px); }
  66%      { transform: translate(-50%,-50%) translateY(10px); }
}
@keyframes text-shimmer {
  0%,100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
@keyframes glow-breathe {
  0%,100% { text-shadow: 0 0 20px #C8FF00, 0 0 60px rgba(200,255,0,0.3); }
  50%      { text-shadow: 0 0 40px #C8FF00, 0 0 100px rgba(200,255,0,0.6), 0 0 160px rgba(200,255,0,0.2); }
}

.neon-text {
  animation: glow-breathe 3s ease-in-out infinite;
  color: #C8FF00;
}
.shimmer-text {
  background: linear-gradient(90deg, #C8FF00, #fff, #C8FF00, #fff, #C8FF00);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: text-shimmer 4s ease infinite;
}
.beam { animation: beam-drift 8s ease-in-out infinite; }
.orb-float { animation: orb-float 7s ease-in-out infinite; }

.btn-primary {
  background: #C8FF00;
  color: #050505;
  font-weight: 800;
  letter-spacing: 0.1em;
  font-size: 11px;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.btn-primary::before {
  content: '';
  position: absolute; inset: 0;
  background: white;
  transform: translateX(-101%);
  transition: transform 0.3s ease;
}
.btn-primary:hover::before { transform: translateX(0); }
.btn-primary:hover { box-shadow: 0 0 30px rgba(200,255,0,0.5); }
.btn-primary span  { position: relative; z-index: 1; }

.btn-ghost {
  border: 1px solid rgba(200,255,0,0.35);
  color: #C8FF00;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 11px;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.btn-ghost:hover {
  background: rgba(200,255,0,0.08);
  border-color: #C8FF00;
  box-shadow: 0 0 20px rgba(200,255,0,0.15);
}
`;
