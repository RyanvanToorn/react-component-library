import React from "react";
import styles from "./Card.module.css";

/**
 * Card Component
 * Used for displaying content in a styled card form.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

/* === States === */

/* === Functions === */

export default function Card({ headerContents = null, bodyContents = null, footerContents = null, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return (
    <div className={`card ${styles.card} ${extendedClass}`} style={inlineStyles}>
      <div className={styles.cardHeader}>{headerContents}</div>
      <div className={styles.cardBody}>{bodyContents}</div>
      <div className={styles.cardFooter}>{footerContents}</div>
    </div>
  );
}
