import React from "react";
import styles from "./Icon.module.css";

/**
 * Icon Component
 * Used for displaying icons - uses the Font Awesome library icons by default.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

/* === States === */

/* === Functions === */
export default function Icon({ icon = "search", isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return <i className={`icon fa fa-${icon} ${styles.icon} ${extendedClass}`} aria-hidden="true" style={inlineStyles} />;
}
