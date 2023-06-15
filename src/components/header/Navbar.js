import React from 'react'
import categoryIcon from '../../assets/svg/category.svg'
import Phone from '../../assets/svg/phone.svg'
import MenuBar from './MenuBar'
import MultiLevelDropdown from './MultiLevelDropdown'
import Dropdown from '../common/Dropdown'
import SliderSlice from '../../redux-box/slices/SliderSlice'
function Navbar() {
  return (
    <div>
        <div>
            <div className='border-b border-[#dfdfdf]'>
                <div className='mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92'>
                    <div className='flex gap-6'>
                        <div className='w-[22%] flex items-center justify-between bg-[#F3F3F3] pl-5 pr-3 py-5'>
                            <div className='flex gap-3'>
                                <img src={categoryIcon} alt="" />
                                <p>Categories</p>
                            </div>
                            <div>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='w-[78%] flex justify-between py-5'>
                            <MenuBar />
                            <Dropdown dropImg={Phone} DropName="Download Our App" Share />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92'>
                    <div className='flex'>
                        <div className="w-[21.5%]">
                            <MultiLevelDropdown />
                        </div>
                        <div className='w-[78.5%] pl-6 pt-4'>
                            <SliderSlice />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar