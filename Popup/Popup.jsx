import React, { useState } from "react";
import styles from "./Popup.module.css";

function Popup(title = "Popup", subtitle = "", showCloseButton, isVisible = true, extendedClass = "", inlineStyles = {}) {
  const [isOpen, setIsOpen] = useState(false);
  if (!isVisible || !isOpen) {
    return null;
  }

  return <div className={`popup ${styles.Popup} ${extendedClass}`} style={inlineStyles}></div>;
}

export default Popup;
