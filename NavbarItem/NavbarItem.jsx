import React from "react";
import styles from "./NavbarItem.module.css";

export default function NavbarItem({ onClick = () => {}, iconName = "", label, isEnabled = true, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return (
    <div className={`navbar-item ${styles.navbarItem} ${extendedClass}`} style={inlineStyles} onClick={onClick}>
      <div className={`navbar-item__icon-div ${styles.navbarItemIconDiv}`}>
        if ({iconName}!=""){<i className={`navbar-item__icon fa-${iconName} fa icon ${styles.navbarItemIcon}`}></i>}
      </div>
      <div className={`navbar-item__label-div ${styles.navbarItemLabelDiv}`}>
        <label className={`navbar-item__label ${styles.navbarItemLabel}`}>{label}</label>
      </div>
    </div>
  );
}
