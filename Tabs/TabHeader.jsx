import React from "react";
import styles from "./Tabs.module.css";

/**
 * Tab Header Component for navigating content within the same view.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

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
      className={`tab-header ${styles.tabHeader} ${isCurrentTab ? styles.tabHeaderActive : styles.tabHeaderInactive} ${
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
