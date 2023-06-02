import React from 'react'

function ShopBtn() {
  return (
        <div>
            <button className="process-goto hover:bg-[#2c2c2c] hover:text-white cursor-pointer absolute flex justify-center text-[#2c2c2c] rounded-sm text-xs mt-[13px] items-center py-2 w-[121px] font-dm-sans border border-gray-800">
                <span>Shop Now</span>
                <svg class="relative ml-5p" width="10" height="7" viewBox="0 0 10 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.7344 0L5.75327 1.05155L7.34399 2.75644H0.69376C0.310607 2.75644 0 3.08934 0 3.5C0 3.91066 0.310607 4.24356 0.69376 4.24356H7.34399L5.75327 5.94845L6.7344 7L10 3.5L6.7344 0Z" fill="currentColor"></path>
                </svg>
            </button>
        </div>
  )
}

export default ShopBtn