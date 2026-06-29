import React from "react";

/* Optimized Performance Background */
export function CinematicBg() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        willChange: "transform", // Forces GPU isolation so scrolling stays butter-smooth
      }}
    >
      {/* Base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
        }}
      />

      {/* Subtle Grid Mapping */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(200,255,0,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 100%)", // Fades the grid out nicely near the bottom
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Top Ambient Highlight */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(400px, 80vw, 800px)", // Shrinks cleanly on mobile so it doesn't leak or break layout widths
          height: 500,
          background:
            "radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)",
          filter: "blur(60px)", // Blurs the edges completely into the dark backdrop
        }}
      />

      {/* Outer Cinematic Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(5,5,5,0.7) 100%)",
        }}
      />
    </div>
  );
}
