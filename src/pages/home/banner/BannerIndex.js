import React from 'react'
import MixedContent from './MixedContent'
import ShipIcon from '../../../assets/images/banner/ShipIcon.png'
import CouponInfo from './CouponInfo'
function BannerIndex() {
  return (
    <div className='mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92 mt-12'>
        <div className='flex gap-6'>
            <div className='flex border border-[#898989] border-dashed'>
              <MixedContent Mixicon={ShipIcon} Mixtitle="Free Shipping Worldwide" MixtitleTwo="For all orders over $350" />
              <MixedContent Mixicon={ShipIcon} Mixtitle="Secured Online Payment" MixtitleTwo="For all orders over $350" />
              <MixedContent Mixicon={ShipIcon} Mixtitle="Money Back Guarantee" MixtitleTwo="For all orders over $350" />
            </div>
            <CouponInfo />
        </div>
    </div>
  )
}

export default BannerIndex