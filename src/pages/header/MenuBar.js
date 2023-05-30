import  React, { useState, useRef } from "react";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import Menu from "../../components/menu";
function MenuBar() {
    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  
    // Function to close dropdown
    const closeHoverMenu = () => {
      setMenuDropDownOpen(false);
    };
  
    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
  return (
    <div className='flex font-dm-sans gap-3'>
        <div className='border-r pr-2.5' ref={dropdownRef}>
            <button
            className="text-[16px] text-[#2c2c2c]"
            onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
            >
                Home
            </button>
            {isMenuDropDownOpen && <Menu />}
        </div>
        <a href className='text-[#2c2c2c] border-r pr-3'>Shop</a>
        <a href className='text-[#2c2c2c] border-r pr-3'>Coupon</a>
        <a href className='text-[#2c2c2c] border-r pr-3'>Blogs</a>
        <a href className='text-[#2c2c2c]'>Pages</a>

    </div>
  )
}

export default MenuBar