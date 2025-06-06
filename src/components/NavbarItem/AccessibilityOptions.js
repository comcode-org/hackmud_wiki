import React from "react";

export default function AccessibilityOptions({ mobile }) {
  if (mobile) {
    return null;
  }

  let accessibilityMode = null;

  if (typeof window !== "undefined") {
    const storedMode = window.localStorage.getItem("accessibilityMode");
    setAccessibilityMode(storedMode === "true" ? "true" : "false");
  }

  function setAccessibilityMode(value) {
    accessibilityMode = value;
    window.localStorage.setItem("accessibilityMode", accessibilityMode);

    document.documentElement.setAttribute("data-accessible", accessibilityMode);
    for (let elem of document.getElementsByClassName("main-wrapper")) {
      elem.setAttribute("data-accessible", accessibilityMode);
    }
  }

  const toggleAccessibilityMode = () => {
    setAccessibilityMode(accessibilityMode === "true" ? "false" : "true");
  };

  function handleClick() {
    toggleAccessibilityMode();
  }

  return (
    <div
      class="navbar-a11y"
      aria-label="Toggle accessible reading mode"
      title="Toggle accessible reading mode"
      onClick={handleClick}
    ></div>
  );
}
