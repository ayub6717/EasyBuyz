import React from 'react'
import TopHeadBtn from '../../components/TopHeadBtn'
import callImg from '../../assets/svg/call.svg'
import smsImg from '../../assets/svg/sms.svg'
import globalImg from '../../assets/svg/global.svg'
import compareImg from '../../assets/svg/compare.svg'
import sellerImg from '../../assets/svg/seller.svg'
import SelectField from '../../components/SelectField'

function TopHeader({data}) {
    const branch = [
        { value: "En", label: "English"},
        { value: "Bn", label: "Bangali"},
        { value: "Ar", label: "Arabic"},
        { value: "Fr", label: "French"}
      ];
  return (
    <div>
        <div className='bg-[#FCCA19] font-dm-sans'>
            <div className='py-2 mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92'>
                <div className='flex justify-between'>
                    <div className='flex gap-[30px]'>
                        <TopHeadBtn name="+12013828902" img={callImg} />
                        <TopHeadBtn name="ayub.devs@gmail.com" img={smsImg} />
                    </div>      
                    <div className='flex gap-[30px]'>
                        <TopHeadBtn name="Be a seller" img={sellerImg} />
                        <TopHeadBtn name="Compare" img={compareImg} />
                        <TopHeadBtn name="USD" symbol="$" />
                        <div className='flex items-center ml-2'>
                            <span><img src={globalImg} alt="global" /></span> <SelectField data={branch} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader