import React from 'react'

function MultiLevelDropdown() {
    return (

        <div>
            <ul className="bg-white border rounded-sm relative h-[490px]">
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">
                            <button
                                className="w-full text-left flex items-center outline-none focus:outline-none"
                            >
                                <span className="pr-1 flex-1">Langauges</span>
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
                                <li className="px-3 py-3 hover:bg-gray-100 border-b">Javascript 4</li>
                                <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">
                                <button
                                    className="w-full text-left flex items-center outline-none focus:outline-none"
                                >
                                    <span className="pr-1 flex-1">Langauges</span>
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
                                className="bg-white border rounded-sm absolute -top-px right-0.5 
                                 origin-top-left h-full w-[270px] z-50"
                            >
                                <li className="px-3 py-3 hover:bg-gray-100 border-b">Javascript</li>
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
                                    <ul className="bg-white border rounded-sm absolute -top-px right-0.5 origin-top-left w-[270px] h-full"
                                    >
                                        <li className="px-3 py-3 hover:bg-gray-100 border-b">2.7</li>
                                        <li className="px-3 py-3 hover:bg-gray-100">3+</li>
                                    </ul>
                                </li>
                                <li className="px-3 py-3 hover:bg-gray-100 border-b">Go</li>
                                <li className="px-3 py-3 hover:bg-gray-100">Rust</li>
                            </ul>
                        </li>
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
                                <li className="px-3 py-3 hover:bg-gray-100 border-b">Go</li>
                                <li className="px-3 py-3 hover:bg-gray-100">Rust</li>
                            </ul>
                        </li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">Programming</li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">Programming</li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">
                            <button
                                className="w-full text-left flex items-center outline-none focus:outline-none"
                            >
                                <span className="pr-1 flex-1">Langauges</span>
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
                            <ul className="bg-white border rounded-sm absolute top-0 right-0.5 origin-top-left h-full w-[270px] z-50">
                                <li className="px-3 py-3 hover:bg-gray-100 border-b">Javascript</li>
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
                                    <ul className="bg-white border rounded-sm absolute -top-px right-0.5 origin-top-left w-[270px] h-full"
                                    >
                                        <li className="px-3 py-3 hover:bg-gray-100 border-b">2.7</li>
                                        <li className="px-3 py-3 hover:bg-gray-100">3+</li>
                                    </ul>
                                </li>
                                <li className="px-3 py-3 hover:bg-gray-100 border-b">Go</li>
                                <li className="px-3 py-3 hover:bg-gray-100">Rust</li>
                            </ul>
                        </li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">Programming</li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">DevOps</li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">Programming</li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">Programming</li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100 border-b">Programming</li>
                        <li className="rounded-sm px-3 py-3 hover:bg-gray-100">Testing</li>
                    </ul>
        </div>
    )
}

export default MultiLevelDropdown