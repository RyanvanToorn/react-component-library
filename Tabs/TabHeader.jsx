import React from "react";
import styles from "./Tabs.module.css";

/* === States === */

/* === Functions === */

export default function TabHeader({
  title = "title",
  isCurrentTab = false,
  onClick = () => {},
  isEnabled = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles,
}) {
  if (!isVisible) return null;

  return (
    <div
      className={`tab-header ${styles.tabHeader} ${isCurrentTab ? "tab-header--active" : ""} ${
        isEnabled ? "tab-header--enabled" : "tab-header--disabled"
      } ${extendedClass}`}
      style={inlineStyles}
      onClick={onClick}
      role="tab"
      aria-selected={isCurrentTab}
    >
      <label className="tab-header__title">{title}</label>
    </div>
  );
}
