import React from 'react'
import { useGetAllCategoriesQuery } from '../../redux-box/api/allCategoryApi'
import { useGetSubCategoriesQuery } from '../../redux-box/api/subCategoryApi';

function MultiLevelDropdown() {

    // All category items
    const { data: category, isLoading, isError } = useGetAllCategoriesQuery();
    const displayedCategory = category?.response?.records?.data?.slice(1,12);

    // Sub category item
    const ids = [38, 42, 50];
    const {data:subCategory} = useGetSubCategoriesQuery(ids);
    const displayedSubCategory = subCategory?.response?.records?.data;


    return (

        <div>
            <ul className="bg-white border rounded-sm relative h-[490px]">
            {!isLoading && !isError && displayedCategory.length && displayedCategory.map((item) => (
                <li key={item.id} className="rounded-sm px-3 py-[11.7px] hover:bg-gray-100 border-b">
                    <button
                        className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                            <div className="flex flex-1 items-center">
                                <div className="h-5 w-5">
                                    <img className="h-full neg-transition-scale" src={item.picture_url} alt={item.name} />
                                </div>
                                <span className="text-sm cursor-pointer text-one pl-3">
                                    {item.name}
                                </span>
                            </div>
                        <span className="mr-auto">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </span>
                    </button>
                    <ul
                        className="bg-white border rounded-sm absolute top-0 right-0.5 
                                 origin-top-left h-full w-[270px] z-50"
                    >

                    {!isLoading && !isError && displayedSubCategory && displayedSubCategory.length > 0 && displayedSubCategory.map((item) => (
                        <li key={item.id} className="rounded-sm px-3 py-[11.7px] hover:bg-gray-100 border-b">
                            <button
                                className="w-full text-left flex items-center outline-none focus:outline-none"
                            >
                                    <div className="flex flex-1 items-center">
                                        <div className="h-5 w-5">
                                            <img className="h-full neg-transition-scale" src={item.picture_url} alt={item.name} />
                                        </div>
                                        <span className="text-sm cursor-pointer text-one pl-3">
                                            {item.name}
                                        </span>
                                    </div>
                                <span className="mr-auto">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <ul
                                className="bg-white border rounded-sm absolute top-0 right-0.5 
                                        origin-top-left h-full w-[270px] z-50"
                            >

                                <li className="rounded-sm px-3 py-3 hover:bg-gray-100 min-h-min border-b">
                                    <button
                                        className="w-full text-left flex items-center outline-none focus:outline-none"
                                    >
                                        <span className="pr-1 flex-1">Python</span>
                                        <span className="mr-auto">
                                            <svg
                                                className="fill-current h-4 w-4
                                                        "
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                    <ul className="bg-white border rounded-sm absolute -top-px right-0.5 origin-top-left w-[270px] h-full z-50">
                                        <li className="px-3 py-3 hover:bg-gray-100 border-b">2.7</li>
                                        <li className="px-3 py-3 hover:bg-gray-100">3+</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    ))}
                    </ul>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default MultiLevelDropdown