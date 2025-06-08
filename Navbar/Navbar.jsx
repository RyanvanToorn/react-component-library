import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";

/**
 * Dynamic Navbar Component for responsive devices
 * Used for displaying various menu items (NavbarItems) on the side or bottom of the screen depending on the device type.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export default function Navbar({ items = [], defaultItem = "", isVisible = true, extendedClass = "", inlineStyles = {} }) {
  const [activeItem, setActiveItem] = useState(() => {
    if (!defaultItem) return undefined;
    return items.find((item) => item.key === defaultItem);
  });

  const [responsiveClass, setResponsiveClass] = useState(styles.navbarDesktop);

  useEffect(() => {
    function updateResponsiveClass() {
      if (window.innerWidth < 640) {
        setResponsiveClass(styles.navbarPhone);
      } else if (window.innerWidth < 1024) {
        setResponsiveClass(styles.navbarTablet);
      } else {
        setResponsiveClass(styles.navbarDesktop);
      }
    }
    updateResponsiveClass();
    window.addEventListener("resize", updateResponsiveClass);
    return () => window.removeEventListener("resize", updateResponsiveClass);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  if (!isVisible) return null;

  return (
    <div className={`navbar ${responsiveClass} ${styles.navbar} ${extendedClass}`} style={inlineStyles}>
      <div className={`navbar__items-div ${styles.navbarItemsDiv}`}>
        {items.map((item) => (
          <NavbarItem
            key={item.key}
            onClick={() => handleItemClick(item)}
            iconName={item.iconName}
            label={item.label}
            isSelected={item === activeItem}
            isEnabled={item.isEnabled}
            isVisible={item.isVisible}
            extendedClass={item.extendedClass}
            inlineStyles={item.inlineStyles}
          ></NavbarItem>
        ))}
      </div>
    </div>
  );
}
