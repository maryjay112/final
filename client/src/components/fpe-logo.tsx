import React from 'react';

interface FPELogoProps {
  className?: string;
  size?: number;
}

export default function FPELogo({ className = "", size = 48 }: FPELogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield background */}
      <path
        d="M24 2L4 10v12c0 12.15 8.4 23.56 20 26 11.6-2.44 20-13.85 20-26V10L24 2z"
        fill="#1e3a8a"
        stroke="#ffffff"
        strokeWidth="1"
      />
      
      {/* Book symbol */}
      <rect
        x="12"
        y="14"
        width="24"
        height="16"
        rx="2"
        fill="#ffffff"
        opacity="0.9"
      />
      <line
        x1="24"
        y1="14"
        x2="24"
        y2="30"
        stroke="#1e3a8a"
        strokeWidth="1"
      />
      
      {/* Gear symbol for technical education */}
      <circle
        cx="24"
        cy="35"
        r="4"
        fill="#10b981"
        stroke="#ffffff"
        strokeWidth="1"
      />
      <circle
        cx="24"
        cy="35"
        r="2"
        fill="#ffffff"
      />
      
      {/* Technical lines */}
      <line x1="20" y1="35" x2="28" y2="35" stroke="#ffffff" strokeWidth="0.5" />
      <line x1="24" y1="31" x2="24" y2="39" stroke="#ffffff" strokeWidth="0.5" />
      
      {/* FPE Text */}
      <text
        x="24"
        y="20"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#1e3a8a"
        fontFamily="Arial, sans-serif"
      >
        FPE
      </text>
    </svg>
  );
}