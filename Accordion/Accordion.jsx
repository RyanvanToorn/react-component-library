import React, { useState } from "react";
import styles from "./Accordion.module.css";
import Icon from "../Icon/Icon.jsx";

function Accordion({ items = [], isExpandAllVisible = false, isExpandAllEnabled = true, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;
  if (!items || items.length === 0) return null;

  // Track expanded state for all items
  const [expanded, setExpanded] = useState(items.map((item) => !!item.startExpanded));

  // Toggle a single item
  const handleToggle = (idx) => {
    setExpanded((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  // Expand or collapse all
  const handleExpandAll = (expand) => {
    setExpanded(items.map(() => expand));
  };

  // Determine if all are expanded
  const isAllExpanded = expanded.every(Boolean);

  return (
    <div className={`accordion ${styles.Accordion} ${extendedClass}`} style={inlineStyles}>
      <div className="accordion__expand-all-container">
        <AccordionExpandAll
          isVisible={isExpandAllVisible}
          isEnabled={isExpandAllEnabled}
          isAllExpanded={isAllExpanded}
          onExpandAll={() => handleExpandAll(!isAllExpanded)}
        />
      </div>
      <div className="accordion__items-container">
        {items.map((item, idx) => (
          <AccordionItem
            key={item.key || idx}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            isExpanded={expanded[idx]}
            onToggle={() => handleToggle(idx)}
            isVisible={item.isVisible}
            isEnabled={item.isEnabled}
            extendedClass={item.extendedClass}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({
  title = "",
  subtitle = "",
  content = <div></div>,
  isExpanded = false,
  onToggle = () => {},
  isVisible = true,
  isEnabled = true,
  extendedClass = "",
}) {
  if (!isVisible) return null;

  return (
    <div
      className={`accordion-item ${styles.AccordionItem} ${extendedClass} ${
        isExpanded ? `${styles.AccordionitemExpanded} accordion-item--expanded` : `${styles.AccordionItemCollapsed} accordion-item--collapsed`
      }`}
    >
      <div
        className={`accordion-item__header ${styles.AccordionItemHeader}`}
        onClick={isEnabled ? onToggle : undefined}
        style={{ cursor: isEnabled ? "pointer" : "not-allowed" }}
      >
        <div className={styles.AccordionItemHeaderLeft}>
          <div className={`accordion-item__header-title ${styles.AccordionItemHeaderTitle}`}>{title}</div>
          <div className={`accordion-item__header-subtitle ${styles.AccordionItemHeaderSubtitle}`}>{subtitle}</div>
        </div>
        <div className={styles.AccordionItemHeaderRight}>
          <Icon icon={isExpanded ? "chevron-up" : "chevron-down"} />
        </div>
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
