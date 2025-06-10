import React, { useState, useEffect } from "react";
import styles from "./Popup.module.css";

function Popup({
  isOpen = false,
  title = "",
  subtitle = "",
  bodyContents = null,
  footerContents = null,
  showCloseButton = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) {
  const [isPopupOpen, setIsOpen] = useState(isOpen);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  if (!isVisible || !isPopupOpen) {
    return null;
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={`popup-backdrop ${styles.PopupBackdrop}`}></div>
      <div className={`popup ${styles.Popup} ${extendedClass}`} style={inlineStyles}>
        <PopupHeader title={title} subtitle={subtitle} showCloseButton={showCloseButton} onClose={closePopup} />
        <PopupContent bodyContents={bodyContents} />
        <PopupFooter footerContents={footerContents} />
      </div>
    </div>
  );
}

/* ===== Sub Components ===== */

const PopupHeader = ({ title, subtitle, onClose, showCloseButton }) => {
  return (
    <div className={`popup-header ${styles.PopupHeader}`}>
      <div className={`${styles.PopupHeaderLayoutContainerLeft} `}>
        <div className={`popup-header__title ${styles.PopupHeaderTitle}`}>{title}</div>
        <div className={`popup-header__subtitle ${styles.PopupHeaderSubtitle}`}>{subtitle}</div>
      </div>
      <div className={`${styles.PopupHeaderLayoutContainerRight} `}>
        <CloseButton onClose={onClose} isVisible={showCloseButton} />
      </div>
    </div>
  );
};

const PopupContent = ({ bodyContents }) => {
  return <div className={`popup-content ${styles.PopupContent}`}>{bodyContents}</div>;
};

const PopupFooter = ({ footerContents }) => {
  return <div className={`popup-footer ${styles.PopupFooter}`}>{footerContents}</div>;
};

const CloseButton = ({ onClose, isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <button className={`popup-close-button ${styles.CloseButton}`} onClick={onClose}>
      ❌
    </button>
  );
};

const ExpandButton = ({ onExpand, isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <button className={`popup-close-button ${styles.CloseButton}`} onClick={onClose}>
      ❌
    </button>
  );
};

export default Popup;
