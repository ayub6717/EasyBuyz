import React from 'react'
import ShopBtn from "../../components/ShopBtn";
import ProductBnrTwo from './ProductBnrTwo';
import proImg from '../../assets/images/banner/banImg.png'
import bannerTwo from '../../assets/images/banner/bannerTwo.png'

function PrdouctBanner() {
  return (
    <section className="mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92 my-10 md:my-12">
        <div className="block relative h-full" href="">
            <div className="promote-img "> </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 p-6 flex align-items-center">
                <div>
                    <p className="text-lg font-medium text-gray-10 dm-sans">Best in Electronics</p>
                    <p className="text-gray-12 font-bold text-2.5xl -mt-1.5 uppercase dm-bold">
                        Gadget Town</p>
                    <p className="text-base dm-sans">Starting from only <span className="text-[#FA8864]">$9.99</span></p>
                    <ShopBtn />
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-[30px] gap-[15px] my-10 font-dm-sans">
            <ProductBnrTwo proImg={proImg} tittle_one="ELECTRONICS" tittle_two="ELECTROFY" tittle_three="YOUR LIFW" />
            <ProductBnrTwo proImg={bannerTwo} tittle_one="SHOES" tittle_two="ADD STYLES TO" tittle_three="YOUR FEET" />
        </div>
    </section>
  )
}

export default PrdouctBanner