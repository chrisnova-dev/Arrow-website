import React from 'react';

export default function LogoSVG({ size = 64, animate: doAnim = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <filter id={`lg-${size}`}>
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter={`url(#lg-${size})`}>
        {/* Arrow up */}
        <polyline points="32,6 54,46 32,38 10,46"
          stroke="#C8FF00" strokeWidth="3.5"
          strokeLinecap="round" strokeLinejoin="round" fill="rgba(200,255,0,0.07)" />
        {/* Center line */}
        <line x1="32" y1="20" x2="32" y2="58"
          stroke="#C8FF00" strokeWidth="2"
          strokeLinecap="round" strokeLinedasharray="4 5" opacity="0.45" />
        {/* Inner highlight */}
        <polyline points="32,14 48,42 32,36 16,42"
          stroke="rgba(200,255,0,0.25)" strokeWidth="1"
          strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}