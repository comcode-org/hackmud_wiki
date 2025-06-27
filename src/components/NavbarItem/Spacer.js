import React from "react";

export default function Spacer({ mobile }) {
  if (mobile) {
    return null;
  }

  return <div class="navbar-spacer"></div>;
}
