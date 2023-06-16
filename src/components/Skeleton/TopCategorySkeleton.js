import React from 'react'

function TopCategorySkeleton() {
    const data = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className="mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92 my-10 md:my-12 font-dm-sans">
            <p className="text-center font-bold text-sm md:text-[22px] text-gray-12 mb-2.5 md:mb-5 uppercase">
                Top Categories Of the Month
            </p>
            <div className="grid grid-flow-col gap-7 auto-cols-max overflow-auto scrollbar-w-2">
            {data.map((number) => (
                <div>
                    <div className="border mb-4 md:mb-0 rounded-md relative t-img trans-effect w-[130px] 2xl:w-[140px]">
                        <div key={number} className="flex justify-center items-center h-[130px] top-skelton">
                            <div className="md:h-16 md:w-16 w-66p h-66p object-contain trans-effect skelton-effect"> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
  )
}

export default TopCategorySkeleton