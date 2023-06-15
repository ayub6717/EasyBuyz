import React from 'react'

function TopHeadBtn(props) {
  const {name,img,symbol,cartList} = props
  return (
    <button className={`${cartList? 'flex flex-col items-center ml-5' : 'w-fill flex items-center font-dm-sans font-medium'}`}>
        <img src={img} alt={img} />
        <span className={`${cartList?'text-[10px] text-[#898989] font-medium font-dm-sans mt-[11px] leading-3' : 'pl-2 text-[#2c2c2c] text-[12px] leading-4'}`}> <span className='text-[16px]'>{symbol}</span> {name}</span>
    </button>
  )
}

export default TopHeadBtn