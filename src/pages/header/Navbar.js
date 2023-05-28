import React from 'react'
import categoryIcon from '../../assets/svg/category.svg'
import Phone from '../../assets/svg/phone.svg'
import Dropdown from '../../components/Dropdown'
import MenuBar from './MenuBar'
import MultiLevelDropdown from './MultiLevelDropdown'
function Navbar() {
  return (
    <div>
        <div>
            <div className='border-b border-[#dfdfdf]'>
                <div className='mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92'>
                    <div className='flex gap-6'>
                        <div className='flex items-center justify-between w-[333px] bg-[#F3F3F3] pl-5 pr-3 py-5'>
                            <div className='flex gap-3'>
                                <img src={categoryIcon} alt="" />
                                <p>Categories</p>
                            </div>
                            <div>
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='w-[80%] py-5'>
                            <MenuBar />
                        </div>
                        <div className='w-[20%] py-5'>
                            <Dropdown dropImg={Phone} DropName="Download Our App" Share />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MultiLevelDropdown />
            </div>
        </div>
    </div>
  )
}

export default Navbar