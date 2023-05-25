import React from 'react'

function SearchField() {
  return (
    <div className="relative mb-3 w-3/4 flex flex-wrap">
        <input type="text" className="relative py-[10px] font-medium px-3 pr-10 w-full bg-white rounded border border-color_DF outline-none text-sm text-color_89 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Search Product" />
        <span className="absolute right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.5509 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9057 16.3198C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#2C2C2C"/>
            </svg>
        </span>
    </div>
)}

export default SearchField