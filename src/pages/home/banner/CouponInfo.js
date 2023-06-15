import React from 'react'

function CouponInfo() {
  return (
        <div className="flex justify-between items-center bg-gray-12 p-[15px] font-dm-sans">
            <div className="w-2/3 ml-[5px]">
                <p className="text-[24px] text-[#fcca19] font-bold">New Here?</p>
                <p className="text-white text-sm mt-1 leading-normal pr-8">Use coupon <span className="text-[#fcca19] font-medium">‘BUYNOW01’</span> and get up to $200 on your first purchase.</p>
            </div>
            <div className="w-1/3 px-1 h-full border text-[#fcca19] flex justify-center items-center text-base font-medium border-dashed border-white rounded">
                <p className="text-center font-bold capitalize">Get Coupon</p>
            </div>
        </div>
  )
}

export default CouponInfo