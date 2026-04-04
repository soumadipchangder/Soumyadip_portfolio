import React from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    const btn = document.getElementById("topButton");
    if (!btn) return;
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      btn.style.visibility = "visible";
    } else {
      btn.style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: "#00d4ff",
        backgroundColor: "rgba(18, 24, 48, 0.8)",
        border: "1px solid rgba(0, 212, 255, 0.3)",
        backdropFilter: "blur(10px)",
      }}
      title="Go up"
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
