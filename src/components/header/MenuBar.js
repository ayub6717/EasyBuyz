/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import Menu from '../common/menu';

function MenuBar() {
    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  
    // Function to close dropdown
    const closeHoverMenu = () => {
        setMenuDropDownOpen(false);
    };
  
    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

    return (
        <div className='flex font-dm-sans gap-3 z-50'>
            <div className='border-r pr-2.5' ref={dropdownRef}>
                <button
                    className="text-[16px] text-[#2c2c2c]"
                    onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
                >
                    Home
                </button>
                {isMenuDropDownOpen && <Menu />}
            </div>
            <button
                className='text-[#2c2c2c] border-r pr-3'
                onClick={() => {}}
            >
                Shop
            </button>
            <button
                className='text-[#2c2c2c] border-r pr-3'
                onClick={() => {}}
            >
                Coupon
            </button>
            <button
                className='text-[#2c2c2c] border-r pr-3'
                onClick={() => {}}
            >
                Blogs
            </button>
            <button
                className='text-[#2c2c2c]'
                onClick={() => {}}
            >
                Pages
            </button>
        </div>
    );
}

export default MenuBar;
