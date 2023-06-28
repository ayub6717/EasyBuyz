/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useGetTopCategoriesQuery } from '../../../redux-box/api/topCategoryApi';
import TopCategorySkeleton from '../../../components/Skeleton/TopCategorySkeleton';


function TopCategory() {
    
    const { data: category, isLoading, isError } = useGetTopCategoriesQuery();
    const displayedCategory = category?.response?.records?.data?.slice(13, 20);
    
    return (
        <div>
            <section className="mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92 my-10 md:my-12 font-dm-sans">
                <p className="text-center font-bold text-sm md:text-[22px] text-gray-12 mb-2.5 md:mb-5 uppercase">
                    Top Categories Of the Month
                </p>
                {isLoading && <TopCategorySkeleton/>}
                {isError && <div>Error loading top categories</div>}
                <div className="grid grid-flow-col gap-7 auto-cols-max overflow-auto scrollbar-w-2">
                    {!isLoading && !isError && displayedCategory.length && displayedCategory.map((item) => (
                        <button key={item.id}>
                            <div className="border hover:bg-[#fcca19] mb-4 md:mb-0 rounded-md relative t-img trans-effect w-[130px] 2xl:w-[140px]">
                                <div className="flex justify-center items-center h-[130px]">
                                    <img className="md:h-16 md:w-16 w-66p h-66p object-contain trans-effect" src={item.picture_url} alt={item.name} />
                                </div>
                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xs md:text-base mx-3 text-white font-semibold">
                                    <p className="text-gray-12 absolute inset-x-0 bottom-1 md:bottom-3 text-center leading-5 line-clamp-single">
                                    {item.name}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default TopCategory