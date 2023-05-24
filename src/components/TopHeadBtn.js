import React from 'react'

function TopHeadBtn({name,img,symbol}) {
  return (
    <button class="w-fill flex items-center font-dm-sans font-medium">
        <img src={img} alt={img} />
        <span class="pl-2 text-[#2c2c2c] text-[12px] leading-4"> <span className='text-[16px]'>{symbol}</span> {name}</span>
    </button>
  )
}

export default TopHeadBtn