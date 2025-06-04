import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";

/**
 * Dynamic Navbar Component for responsive devices
 * Used for displaying various menu items (NavbarItems) on the side or bottom of the screen depending on the device type.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export default function Navbar({ items = [], defaultItem = 0, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  const [activeItem, setActiveItem] = useState(defaultItem);

  const handleItemClick = (item) => {
    setActiveItem(item);
    console.log(`Navbar Item changed: ` + item.label);
  };

  if (!isVisible) return null;

  return (
    <div className={`navbar ${styles.navbar} ${extendedClass}`} style={inlineStyles}>
      <div className={`navbar__items-div ${styles.navBarItemsDiv}`}>
        {items.map((item) => (
          <NavbarItem
            key={item.key}
            onClick={() => handleItemClick(item)}
            iconName={item.iconName}
            label={item.label}
            isSelected={item.isSelected === activeItem}
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
