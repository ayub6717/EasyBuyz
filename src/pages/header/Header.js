import React from 'react'
import Logo from '../../assets/images/logos/logo.png'
import SearchField from '../../components/SearchField'
import Dropdown from '../../components/Dropdown'
import dropImg from '../../assets/images/profile/user.png'
import wishlist from '../../assets/svg/wishlist.svg'
import cart from '../../assets/svg/cart.svg'
import trackOrder from '../../assets/svg/trackOrder.svg'
import TopHeadBtn from '../../components/TopHeadBtn'
function Header() {
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
                        <Dropdown dropImg={dropImg} DropName="Agatha Wilium" />
                        <TopHeadBtn img={wishlist} name="Wishlist" cartList />
                        <TopHeadBtn img={cart} name="Your Cart" cartList />
                        <TopHeadBtn img={trackOrder} name="Track order" cartList />
                        {/* <Dropdown dropImg={Phone} DropName="Download Our App" Share /> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header