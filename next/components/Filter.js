import React, { useState, useRef, useEffect } from "react";
‍import "./filter.css";
‍import FilterModal from "./FilterModal";

export default function Filter({ children, onApply, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(undefined);
  const buttonRef = useRef(undefined);
  const modalRef = useRef(undefined);

useEffect(() => {
  const handleClickOutside = event => {
    const isDropdownClick =
      dropdownRef.current && dropdownRef.current.contains(event.target);
    const isButtonClick =
      buttonRef.current && buttonRef.current.contains(event.target);
    const isModalClick =
      modalRef.current && modalRef.current.contains(event.target);

    if (isDropdownClick || isButtonClick || isModalClick) {
      /* If the ref is not defined or the user clicked on the menu, we don’t do anything. */ 
      return;
    }

    /* Otherwise we close the menu. */ ‍
    setIsOpen(false);
    };

  document.addEventListener("mousedown", handleClickOutside); /* handle desktops */
  document.addEventListener("touchstart", handleClickOutside); /* handle touch devices */

  /* Event cleanup */ 
  return () => {
    document.removeEventListener("mousedown", handleClickOutside); /* handle desktops */
    document.removeEventListener("touchstart", handleClickOutside); /* handle touch devices */ 
  };
}, [dropdownRef, buttonRef, modalRef]);

const handleApply = event => {‍
  setIsOpen(false);‍
  onApply(event);
‍};

return (
  <div classname="filter"></div>
‍
    
 => setIsOpen(!isOpen)}
      className="filter__button"
    >
‍
      {label}
‍
    


    {isOpen && (
‍
      <div ref="{dropdownRef}" classname="filter__dropdown"></div>
‍
        <div style="{{" paddingtop:="" "2rem",="" paddingbottom:="" "2rem"="" }}=""></div>
‍
          {children}
‍
        

      <div classname="filter__dropdown__actions"></div>
‍
        <button onclick="{handleApply}" classname="filter__dropdown_button"></button>
‍
          Apply
        
‍
      
‍
    
    )}
‍
    {isOpen && (
‍
      
        ref={modalRef}
        onApply={handleApply}
        onDismiss={() => setIsOpen(false)}
      >
‍
      {children}
‍
    
  )}
‍
 
 );
}