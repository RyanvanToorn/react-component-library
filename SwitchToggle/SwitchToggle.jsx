import React from "react";
import styles from "./SwitchToggle.module.css";

/**
 * Switch Toggle Component
 * Used for toggling input or options
 *
 * @param {object} props - Component props
 * @param {boolean} props.isVisible - Controls visibility of the switch
 * @param {string} props.extendedClass - Additional class names to append
 * @param {object} props.inlineStyles - Inline styles to apply
 * @param {boolean} props.defaultChecked - Initial state of the toggle
 * @param {function} props.onToggle - Callback function triggered on toggle
 * @returns {JSX.Element}
 */

/* === States === */

/* === Functions === */

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
