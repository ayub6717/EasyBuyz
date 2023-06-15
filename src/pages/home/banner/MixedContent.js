import React from 'react'

function MixedContent({Mixicon,Mixtitle,MixtitleTwo}) {
  return (
    <div className='p-6 font-dm-sans'>
        <div className='flex gap-4'>
            <div>
                <img className='w-[64px] h-[60px]' src={Mixicon} alt={Mixicon} />
            </div>
            <div className='w-[122px]'>
                <p className='text-[16px] text-[#2c2c2c] font-bold'>{Mixtitle}</p>
            </div>
        </div>
        <p className='text-[13px] text-[#898989] mt-3'>{MixtitleTwo}</p>
    </div>
  )
}

export default MixedContent