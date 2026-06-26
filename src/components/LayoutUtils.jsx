import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { C, FONTS } from '../Constants';

// Assumptions based on your setup:
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const stagger = (delay) => ({
  visible: { transition: { staggerChildren: delay } }
});

export function SectionLabel({ children }) {
  return (
    <motion.div variants={fadeUp} style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16, justifyContent:"center" }}>
      <span style={{ display:"inline-block", width:24, height:1, background:C.neon }} />
      <span style={{ color:C.neon, fontSize:10, fontWeight:700, letterSpacing:"0.28em", fontFamily:FONTS.body }}>{children}</span>
      <span style={{ display:"inline-block", width:24, height:1, background:C.neon }} />
    </motion.div>
  );
}

export function SectionHeading({ children, style = {} }) {
  return (
    <motion.h2 variants={fadeUp} style={{
      fontFamily: FONTS.display,
      fontWeight: 900,
      fontSize: "clamp(28px, 4vw, 52px)",
      color: "#fff",
      lineHeight: 1.1,
      textAlign: "center",
      ...style,
    }}>{children}</motion.h2>
  );
}

export function NeonAccent({ children }) {
  return <span className="neon-text" style={{ color: C.neon }}>{children}</span>;
}

export function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"}
      variants={stagger(0.1)} style={style}>
      {children}
    </motion.div>
  );
}