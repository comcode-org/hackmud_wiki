import React from "react";

export default function AccessibilityOptions() {
  function handleClick() {
    let currentA11yOption = window.localStorage.getItem("accessibilityMode");

    window.localStorage.setItem(
      "accessibilityMode",
      currentA11yOption === "true" ? "false" : "true",
    );
    currentA11yOption = currentA11yOption === "true" ? "false" : "true";

    document.documentElement.setAttribute("data-accessible", currentA11yOption);
    for (let elem of document.getElementsByClassName("main-wrapper"))
      elem.setAttribute("data-accessible", currentA11yOption);
  }

  function a11yOnLoad() {
    let currentA11yOption = window.localStorage.getItem("accessibilityMode");

    document.documentElement.setAttribute(
      "data-accessible",
      currentA11yOption || "false",
    );
    for (let elem of document.getElementsByClassName("main-wrapper"))
      elem.setAttribute("data-accessible", currentA11yOption);
  }

  return (
    <img
      src
      class="navbar-a11y"
      aria-label="Enable or disable accessible reading mode"
      onError={a11yOnLoad}
      onClick={handleClick}
    ></img>
  );
}
