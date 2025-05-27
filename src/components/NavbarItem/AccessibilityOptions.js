import React from "react";

export default function AccessibilityOptions() {
  function handleClick() {
    alert("hi :DD");
  }

  return <button onClick={handleClick}>Click me :)</button>;
}
