import React from 'react'
import ShopBtn from '../../../components/common/ShopBtn'

function ProductBnrTwo(props) {
    const {proImg, tittle_one, tittle_two, tittle_three} = props
    return (
        <div className="md:w-1/2 w-full">
            <div className="block relative">
                <div className="h-44">
                    <img className="h-full w-full object-cover " src={proImg} alt={proImg} />
                </div>
                <div className="absolute p-6 top-0 right-0 bottom-0 left-0 flex align-items-center">
                    <div>
                        <p className="text-[11px] text-[#2c2c2c]">
                            {tittle_one}
                        </p>
                        <p className="text-[#2c2c2c] font-bold text-lg uppercase">
                            {tittle_two}
                        </p>
                        <p className="text-[#2c2c2c] font-bold text-33 -mt-3 uppercase">
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