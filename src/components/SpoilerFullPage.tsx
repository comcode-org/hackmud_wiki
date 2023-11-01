import React from "react";
import styles from "./spoilers.module.css";

let draftInc = 0;

function SpoilerFullPage({ spoilerFor }: { spoilerFor: string }) {
  //const inputId = useId(); requires React v18
  const inputId = `draft-id-for-spoiler-${draftInc++}`;
  return (
    <>
      <input
        id={inputId}
        type="checkbox"
        className={styles.internalCheckbox}
      ></input>
      <label htmlFor={inputId} className={styles.spoilerButton}>
        {spoilerFor}
      </label>
    </>
  );
}

export default SpoilerFullPage;
