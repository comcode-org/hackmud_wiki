import React, { useState, useEffect } from "react";

export default function AccessibilityOptions() {
  const [accessibilityMode, setAccessibilityMode] = useState(() => {
    const storedMode = localStorage.getItem("accessibilityMode");
    return storedMode === "true" ? "true" : "false";
  });

  useEffect(() => {
    localStorage.setItem("accessibilityMode", accessibilityMode);

    document.documentElement.setAttribute("data-accessible", accessibilityMode);
    for (let elem of document.getElementsByClassName("main-wrapper")) {
      elem.setAttribute("data-accessible", accessibilityMode);
    }
  }, [accessibilityMode]);

  const toggleAccessibilityMode = () => {
    setAccessibilityMode(accessibilityMode === "true" ? "false" : "true");
  };

  function handleClick() {
    toggleAccessibilityMode();
  }

  return (
    <img
      src
      class="navbar-a11y"
      aria-label="Enable or disable accessible reading mode"
      onClick={handleClick}
    ></img>
  );
}
