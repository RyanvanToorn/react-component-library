import React from "react";
import styles from "./Navbar.module.css";

/**
 * Dynamic Navbar Item Component for responsive devices
 * Used for displaying various menu items (NavbarItems) on the side or bottom of the screen depending on the device type.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export default function NavbarItem({
  onClick = () => {},
  iconName = "house",
  label = "",
  isSelected = false,
  isEnabled = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) {
  if (!isVisible) return null;

  return (
    <div
      className={`navbar-item ${styles.navbarItem} ${isSelected ? styles.navbarItemSelected : styles.navbarItemUnselected}  ${extendedClass}`}
      style={inlineStyles}
      onClick={isEnabled ? onClick : null}
    >
      <div className={`navbar-item__icon-div ${styles.navbarItemIconDiv}`}>
        <i className={`navbar-item__icon fa-${iconName} fa icon ${styles.navbarItemIcon}`}></i>
      </div>
      <div className={`navbar-item__label-div ${styles.navbarItemLabelDiv}`}>
        <label className={`navbar-item__label ${styles.navbarItemLabel}`}>{label}</label>
      </div>
    </div>
  );
}
