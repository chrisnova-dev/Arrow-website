export const CA = "71waYGNCMRZ3zsc7K81JTTk2E9etAhQiGiPbYYtNBGhp";

export const C = {
  neon: "#C8FF00",
  black: "#050505",
  textLo: "rgba(255,255,255,0.45)",
  textMid: "rgba(255,255,255,0.70)",
};

export const FONTS = {
  display: "'Orbitron', sans-serif",
  body: "'Space Grotesk', sans-serif",
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

*,
*::before,
*::after{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

html{
  scroll-behavior:smooth;
  background:#050505;
}

body{
  background:#050505;
  overflow-x:hidden;
  font-family:'Space Grotesk',sans-serif;
  color:#fff;
}

::-webkit-scrollbar{
  width:4px;
}

::-webkit-scrollbar-track{
  background:#050505;
}

::-webkit-scrollbar-thumb{
  background:#C8FF00;
  border-radius:999px;
}

::selection{
  background:rgba(200,255,0,.2);
  color:#fff;
}

@keyframes ticker{
  from{
    transform:translateX(0);
  }
  to{
    transform:translateX(-50%);
  }
}

.neon-text{
  color:#C8FF00;
  font-weight:700;
}

.btn-primary{
  background:#C8FF00;
  color:#050505;
  border:none;
  padding:12px 22px;
  font-size:12px;
  font-weight:700;
  letter-spacing:.08em;
  cursor:pointer;
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  transition:.2s ease;
}

.btn-primary:hover{
  background:#d7ff38;
  transform:translateY(-2px);
}

.btn-ghost{
  border:1px solid rgba(200,255,0,.3);
  color:#C8FF00;
  padding:12px 22px;
  font-size:12px;
  font-weight:700;
  letter-spacing:.08em;
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  transition:.2s ease;
}

.btn-ghost:hover{
  background:rgba(200,255,0,.08);
  border-color:#C8FF00;
}
`;