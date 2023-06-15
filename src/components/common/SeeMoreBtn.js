import React from 'react'

function SeeMoreBtn() {
  return (
    <div>
        <button class="process-goto relative justify-center text-gray-10 font-medium text-base dm-sans hidden md:inline-flex items-center dm-sans hover:text-gray-12 trans-2">
            <span class="-ml-5">See More</span>
            <svg class="relative ml-2" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70696 0L8.29274 1.41421L10.5856 3.70711H0.999849C0.447564 3.70711 -0.000150681 4.15482 -0.000150681 4.70711C-0.000150681 5.25939 0.447564 5.70711 0.999849 5.70711H10.5856L8.29274 8L9.70696 9.41421L14.4141 4.70711L9.70696 0Z" fill="currentColor"></path>
            </svg>
        </button>
    </div>
  )
}

export default SeeMoreBtn