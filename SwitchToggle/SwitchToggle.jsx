import React, { useState } from "react";
import styles from "./SwitchToggle.module.css";

/**
 * Switch Toggle component
 * Used for toggling input or options
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export default function SwitchToggle({ defaultChecked = false, onToggle = () => {}, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onToggle(newChecked);
  };

  return (
    <input
      className={`switch-toggle ${styles.switchToggle} ${extendedClass}`}
      style={inlineStyles}
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
    />
  );
}
