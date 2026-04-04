import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, theme }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{
          color: theme.imageHighlight || "#00d4ff",
          borderColor: `${theme.imageHighlight || "#00d4ff"}66`,
        }}
      >
        {text}
      </a>
    </div>
  );
}
