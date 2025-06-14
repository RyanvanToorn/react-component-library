import React from "react";
import styles from "./Chip.module.css";

export default function Chip({ text = "Chip", onClick = () => {}, isEnabled = false, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return (
    <div
      className={`chip ${isEnabled ? styles.ChipEnabled : styles.ChipDisabled} ${styles.Chip} ${extendedClass}`}
      style={inlineStyles}
      onClick={isEnabled ? onClick : null}
    >
      {text}
    </div>
  );
}
