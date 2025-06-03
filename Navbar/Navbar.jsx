import React from "react";
import styles from "./Navbar.module.css";

/**
 * Dynamic Navbar Component for responsive devices
 * Used for displaying various menu items (NavbarItems) on the side or bottom of the screen depending on the device type.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

/* === States === */

/* === Functions === */
export default function Navbar({ items = <div></div>, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return (
    <div className={`navbar ${styles.navbar} ${extendedClass}`} style={inlineStyles}>
      {items}
    </div>
  );
}
