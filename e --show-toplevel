import React from "react";
import { GLOBAL_CSS } from "./Constants";
import { CinematicBg, ScrollBar } from "./components/GlobalEffects";
import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import DexSection from "./components/DexSection";
import Footer from "./components/Footer";
import Community from "./components/Community";
import Tokenomics from "./components/Tokenomics";

export default function App() {
  return (
    <div
      style={{
        background: "#050505",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <style>{GLOBAL_CSS}</style>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        .road-center-line {
          display: none;
        }
        @media (min-width: 640px) {
          .road-center-line { display: block !important; }
        }
      `}</style>

      <CinematicBg />
      <ScrollBar />
      {/* <Cursor /> */}

      <div style={{ position: "relative", zIndex: 10 }}>
        <Ticker />
        <Navbar />
        <Hero />
        <DexSection />
        <About />
        <Tokenomics />
        <Roadmap />
        <Faq />
        <Community />
        <Footer />
      </div>
    </div>
  );
}
