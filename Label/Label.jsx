import React from "react";
import styles from "./Label.module.css";

/**
 * Label Component
 * Used for displaying text.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export default function Label({ text = "", isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return (
    <label className={`label ${styles.label} ${extendedClass}`} style={inlineStyles}>
      {text}
    </label>
  );
}
