/* eslint-disable no-script-url */
import React from 'react'
import Logo from '../../assets/images/logos/logo.png'
import SearchField from '../common/SearchField'
import dropImg from '../../assets/images/profile/user.png'
import wishlist from '../../assets/svg/wishlist.svg'
import cart from '../../assets/svg/cart.svg'
import trackOrder from '../../assets/svg/trackOrder.svg'
import user from '../../assets/svg/user.svg'
import adminIcon from '../../assets/svg/adminIcon.svg'
import logout from '../../assets/svg/logout.svg'
import TopHeadBtn from '../common/TopHeadBtn'
import TeastDrop from '../common/CustomDropdown'
function Header() {

    const buttonContent = (
        <>
          <img
            className=" flex-col justify-center bg-gray-100 items-center h-7 w-7 rounded-full dark:text-gray-2 hover:text-purple-500 cursor-pointer flex"
            src={dropImg}
            alt="dropImg"
          />
          <span className="text-[10px] text-[#898989] font-medium font-dm-sans mt-1 leading-3">
            Agatha Wilium
          </span>
        </>
      );
    
      const menuItems = [
        { label: 'My Account', href: 'javascript:void(0)', image:user },
        { label: 'Admin Panel', href: 'javascript:void(0)', image:adminIcon },
        { label: 'Vendor Panel', href: 'javascript:void(0)', image:adminIcon },
        { label: 'Logout', href: 'javascript:void(0)', image:logout },
      ];



  return (
    <>
        <div className='border-b border-[#dfdfdf]'>
            <div className='py-4 mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92'>
                <div className='flex'>
                    <div className='w-[25%]'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='w-[45%]'>
                        <SearchField />
                    </div>
                    <div className='flex items-center justify-end w-[30%]'>

                        <TeastDrop buttonContent={buttonContent} menuItems={menuItems} />

                        <TopHeadBtn img={wishlist} name="Wishlist" cartList />
                        <TopHeadBtn img={cart} name="Your Cart" cartList />
                        <TopHeadBtn img={trackOrder} name="Track order" cartList />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header