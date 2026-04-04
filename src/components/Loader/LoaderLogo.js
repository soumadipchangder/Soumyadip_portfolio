import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <svg
        className="signature-svg"
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        {/* "Soumyadip" - signature style handwriting path */}
        <text
          className="signature-text sig-first"
          x="30"
          y="120"
          fill="none"
          stroke="url(#sigGrad)"
          strokeWidth="1.5"
          fontFamily="'Dancing Script', 'Agustina Regular', cursive"
          fontSize="80"
          fontWeight="700"
          letterSpacing="2"
        >
          Soumyadip
        </text>
        {/* "Changder" */}
        <text
          className="signature-text sig-last"
          x="500"
          y="120"
          fill="none"
          stroke="url(#sigGrad)"
          strokeWidth="1.5"
          fontFamily="'Dancing Script', 'Agustina Regular', cursive"
          fontSize="80"
          fontWeight="700"
          letterSpacing="2"
        >
          Changder
        </text>
        {/* Underline swoop */}
        <path
          className="signature-underline"
          d="M 30 140 Q 250 170, 500 135 Q 700 110, 870 140"
          fill="none"
          stroke="url(#sigGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
}

export default LogoLoader;
