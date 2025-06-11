import React, { useState } from "react";
import styles from "./Accordion.module.css";
import Icon from "../Icon/Icon.jsx";

function Accordion({ items = [], isExpandAllVisible = false, isExpandAllEnabled = true, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;
  if (items.empty) return null;
  return (
    <div className={`accordion ${styles.Accordion} ${extendedClass}`} style={inlineStyles}>
      <div className="accordion__expand-all-container">
        <AccordionExpandAll isVisible={isExpandAllVisible} isEnabled={isExpandAllEnabled} />
      </div>
      <div className="accordion__items-container">
        {items.map((item, idx) => (
          <AccordionItem
            key={item.key || idx}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            startExpanded={item.startExpanded}
            isVisible={item.isVisible}
            isEnabled={item.isEnabled}
            extendedClass={item.extendedClass}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ title = "", subtitle = "", content = <div></div>, startExpanded = false, isVisible = true, isEnabled = true, extendedClass = "" }) {
  const [isExpanded, setIsExpanded] = useState(startExpanded);

  function toggleExpanded() {
    if (isEnabled) {
      setIsExpanded((prev) => !prev);
    }
  }

  if (!isVisible) return null;

  return (
    <div
      className={`accordion-item ${styles.AccordionItem} ${extendedClass} ${
        isExpanded ? `${styles.AccordionitemExpanded} accordion-item--expanded` : `${styles.AccordionItemCollapsed} accordion-item--collapsed`
      }`}
      onClick={toggleExpanded}
    >
      <div className={`accordion-item__header ${styles.AccordionItemHeader}`}>
        <div className={`accordion-item__header-title ${styles.AccordionItemHeaderTitle}`}>{title}</div>
        <div className={`accordion-item__header-subtitle ${styles.AccordionItemHeaderSubtitle}`}>{subtitle}</div>
      </div>
      {isExpanded && <div className={`accordion-item__content ${styles.AccordionItemContent}`}>{content}</div>}
    </div>
  );
}

function AccordionExpandAll({ onExpandAll, isAllExpanded = false, isVisible = false, isEnabled = true }) {
  if (!isVisible) return null;

  return (
    <div className={`accordion-expand-all-container ${styles.AccordionExpandAllContainer}`}>
      <button
        className={`accordion-expand-all-button ${styles.AccordionExpandAllButton} ${
          isEnabled ? `${styles.AccordionExpandAllButtonEnabled}` : `${styles.AccordionExpandAllButtonDisabled}}`
        }`}
        onClick={onExpandAll}
      >
        <Icon icon={isAllExpanded ? "angle-double-up" : "angle-double-down"} />
      </button>
    </div>
  );
}
export default Accordion;
