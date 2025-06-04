import React from "react";
import styles from "./Tabs.module.css";

/**
 * Tab Item Component for navigating content within the same view.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export default function TabItem({ isCurrentTab = false, content = <div></div>, extendedClass = "", inlineStyles = {} }) {
  if (!isCurrentTab) return null;

  return (
    <div className={`tab-item ${styles.tabItem} ${extendedClass}`} style={inlineStyles}>
      {content}
    </div>
  );
}
