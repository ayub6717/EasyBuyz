import React from 'react'
import ShopBtn from '../../components/ShopBtn'

function ProductBnrTwo(props) {
    const {proImg, tittle_one, tittle_two, tittle_three} = props
    return (
        <div class="md:w-1/2 w-full">
            <div class="block relative">
                <div class="h-44">
                    <img class="h-full w-full object-cover " src={proImg} alt={proImg} />
                </div>
                <div class="absolute p-6 top-0 right-0 bottom-0 left-0 flex align-items-center">
                    <div>
                        <p class="text-[11px] text-[#2c2c2c]">
                            {tittle_one}
                        </p>
                        <p class="text-[#2c2c2c] font-bold text-lg uppercase">
                            {tittle_two}
                        </p>
                        <p class="text-[#2c2c2c] font-bold text-33 -mt-3 uppercase">
                            {tittle_three}
                        </p>
                        <ShopBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBnrTwo