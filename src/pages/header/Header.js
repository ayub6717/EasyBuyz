import React from 'react'
import TopHeader from './TopHeader'
import Logo from '../../assets/images/logos/logo.png'
import SearchField from '../../components/SearchField'
function Header() {
  return (
    <>
        <TopHeader />
        <div className='border-b border-[#dfdfdf]'>
            <div className='py-4 mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92'>
                <div className='flex'>
                    <div className='w-[20%]'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='w-[40%]'>
                        <SearchField />
                    </div>
                    <div className='w-[40%]'>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header