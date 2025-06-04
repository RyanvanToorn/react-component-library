import React, { useState } from "react";
import styles from "./Tabs.module.css";
import TabHeader from "./TabHeader";
import TabItem from "./TabItem";

/**
 * Tab Component for navigating content within the same view.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export default function Tabs({ headers = [], items = [], isVertical = false, defaultTab = 0, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!isVisible) return null;

  if (headers.length !== items.length) {
    console.log("Tabs.jsx - mismatch between number of headers and number of items");
    return null;
  }

  return (
    <div className={`tabs ${isVertical ? "tabs--vertical" : "tabs--horizontal"} ${styles.tabs} ${extendedClass}`} style={inlineStyles}>
      {/* Headers */}
      <div className={`tab-header-div ${styles.tabHeaderDiv}`}>
        {headers.map((header, idx) => (
          <TabHeader key={idx} isCurrentTab={activeTab === idx} title={header} onClick={() => setActiveTab(idx)} />
        ))}
      </div>
      {/* Contents */}
      <div className={`tab-items-div ${styles.tabItemsDiv}`}>
        {items.map((item, idx) => (
          <TabItem key={idx} isCurrentTab={activeTab === idx} content={item} />
        ))}
      </div>
    </div>
  );
}
