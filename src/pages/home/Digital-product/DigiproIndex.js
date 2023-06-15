/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import SeeMoreBtn from '../../../components/common/SeeMoreBtn'

function DigiproIndex() {
    return (
        <section className="mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92 my-10 md:my-12">
            <div className="flex md:justify-between justify-center items-center mb-2.5 md:mb-5">
                <p className="font-bold text-sm md:text-22 text-gray-12 uppercase dm-bold">DIGITAL PRODUCTS
                </p>
                <SeeMoreBtn />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-5 md:mt-0">

                <div>
                    <div className="border rev-img rounded-md relative">
                        <div className="h-[360px] flex justify-center items-center">
                            <div className="absolute left-2.5 top-2.5">
                                <p className="bg-[#fcca19] relative z-10 h-18p w-max justify-center text-white px-2 flex items-center rounded-sm mb-2.5 leading-3 roboto-medium font-medium text-xss whitespace-nowrap">
                                    Featured</p>
                                <p className="bg-[#fcca19] h-4 w-max relative text-gray-12 mb-2.5 px-2 py-1 flex items-center justify-center rounded-sm leading-3 roboto-medium font-medium z-10 text-8 whitespace-nowrap uppercase">19.19% off</p>
                            </div>
                            <img className="w-full h-full object-cover rounded-md" src="https://demo.martvill.techvill.net/public/uploads/sizes/medium/20221129/12188c61b8ef38c7dedc52e4cb70739b.jpg" alt="" />
                        </div>
                        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                            <div className="absolute flex justify-center h-6 cursor-pointer top-15p right-15p">
                                <a href="javascript:void(0)" className="relative block w-fill">
                                    <div className="relative left-2">
                                        <div className="wishlist h-6 w-6 p-1 mb-2 text-gray-12 relative hover:bg-[#fcca19] border border-gray-2 rounded-full bg-white add-wishlist">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="h-6 w-6 p-1 absolute mb-2 text-gray-12 bg-white hover:bg-[#fcca19] border border-gray-2 rounded-full compare-bg add-to-compare ">
                                            <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.04937 0.737095C2.01173 0.743939 1.89539 0.767892 1.79274 0.788423C1.69008 0.808954 1.46082 0.8945 1.28288 0.980046C1.01256 1.11008 0.9099 1.18193 0.677215 1.41462C0.44453 1.65073 0.372671 1.74996 0.242641 2.02029C0.0407524 2.44117 -0.00373152 2.63964 -0.000309674 3.09474C0.00653401 3.66277 0.170782 4.11103 0.547185 4.56956C0.776448 4.84673 1.22129 5.14443 1.59427 5.26419L1.72088 5.30525L1.73456 8.16933C1.74825 11.3516 1.73456 11.1737 1.98436 11.6836C2.27864 12.2892 2.84324 12.7478 3.50708 12.9188C3.68501 12.9668 3.95192 12.9804 4.93741 12.9907L6.14874 13.0078L5.69706 13.4595L5.2488 13.9078L5.65942 14.3184L6.07004 14.729L7.06579 13.7367C7.61329 13.1892 8.08208 12.6964 8.10946 12.6348C8.17105 12.4945 8.17105 12.3098 8.10946 12.1695C8.08208 12.1079 7.61329 11.6151 7.06579 11.0676L6.07004 10.0753L5.65942 10.4859L5.2488 10.8965L5.70048 11.3516L6.15558 11.8068L4.94083 11.7965L3.72608 11.7862L3.55498 11.6938C3.34967 11.5843 3.13068 11.3619 3.02118 11.1532L2.93905 10.9992L2.92879 8.15223L2.92194 5.30868L3.04855 5.26419C4.08195 4.93227 4.76632 3.87492 4.63971 2.821C4.51994 1.84919 3.90059 1.10665 2.97327 0.822641C2.74401 0.750783 2.19993 0.699455 2.04937 0.737095ZM2.59687 1.93132C3.1341 2.07161 3.47628 2.50961 3.47628 3.06053C3.47628 3.33427 3.41469 3.53274 3.26071 3.74147C3.04513 4.04602 2.71321 4.21026 2.32312 4.21369C1.76878 4.21369 1.33079 3.8715 1.19049 3.32059C1.03993 2.71834 1.41291 2.10241 2.03226 1.93474C2.27521 1.86972 2.35392 1.86972 2.59687 1.93132Z" fill="#2C2C2C"></path>
                                                <path d="M6.90107 1.74983C6.35015 2.30075 5.88478 2.79692 5.86425 2.84825C5.81634 2.9817 5.81976 3.16305 5.87794 3.29308C5.90531 3.35468 6.3741 3.84742 6.9216 4.39492L7.91735 5.38725L8.32797 4.97663L8.7386 4.56601L8.28691 4.1109L7.83181 3.6558L9.04656 3.66607L10.2613 3.67633L10.4324 3.76872C10.6377 3.87822 10.8567 4.10064 10.9662 4.30937L11.0483 4.46335L11.0586 7.31033L11.0654 10.1539L10.9388 10.1984C10.5248 10.3318 10.0697 10.65 9.81305 10.9922C9.48798 11.42 9.34084 11.8614 9.34084 12.402C9.34084 13.0522 9.56326 13.586 10.0218 14.0445C10.3263 14.3491 10.6035 14.5167 11.0312 14.6468C11.3939 14.7597 11.9346 14.7597 12.2973 14.6468C13.0946 14.4004 13.6626 13.8392 13.9022 13.0556C14.2546 11.9059 13.6181 10.6466 12.4718 10.2292L12.2665 10.1539L12.2528 7.3069C12.2426 4.7371 12.2357 4.44282 12.1844 4.24093C12.003 3.57368 11.5274 2.99538 10.9183 2.70453C10.4803 2.49922 10.405 2.48895 9.06709 2.47184L7.83865 2.45473L8.29033 2.00305L8.7386 1.55479L8.33482 1.15101C8.11582 0.932014 7.9242 0.750657 7.91735 0.750657C7.90709 0.750657 7.44856 1.20234 6.90107 1.74983ZM12.0646 11.3105C12.4171 11.4336 12.6942 11.7519 12.7969 12.142C13.0056 12.9632 12.2255 13.7434 11.4042 13.5347C10.6548 13.343 10.2921 12.5663 10.6275 11.8751C10.8772 11.3618 11.5103 11.112 12.0646 11.3105Z" fill="#2C2C2C"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <button className="open-view-modal">
                                <p className="text-gray-12 font-medium absolute inset-x-0 bottom-0 rounded rounded-t-none text-center text-11 bg-[#fcca19]">
                                    Quick View</p>
                            </button>
                        </div>
                    </div>
                    <div className="sm:text-center flex flex-col">
                        <a href="https://demo.martvill.techvill.net/products/martvill---an-ecommerce-platform-to-sell-everything">
                            <p className="text-13 md:text-sm text-gray-12 md:mt-2 dm-regular line-clamp">MartVill - An ecommerce platform to sell everything</p>
                        </a>
                        <div className="item-rating order-first md:order-none md:mt-0 mt-2">
                            <div className="self-top">
                                <ul className="flex sm:justify-center -space-x-1">

                                    <li className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 primary-text-color" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 primary-text-color" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-5p pr-2">
                                        <svg className="h-3 w-3" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M71 0L86.9405 49.0598H138.525L96.7923 79.3804L112.733 128.44L71 98.1196L29.2672 128.44L45.2077 79.3804L3.47499 49.0598H55.0595L71 0Z" fill="#C4C4C4"></path>
                                            <mask id="mask0_2170_1814" className="mask-type-alpha" maskUnits="userSpaceOnUse" x="3" y="0" width="136" height="129">
                                                <path d="M71 0L86.9405 49.0598H138.525L96.7923 79.3804L112.733 128.44L71 98.1196L29.2672 128.44L45.2077 79.3804L3.47499 49.0598H55.0595L71 0Z" fill="#C4C4C4"></path>
                                            </mask>
                                            <g mask="url(#mask0_2170_1814)">
                                                <rect x="-39" y="-36" width="110" height="201" fill="var(--primary-color)"></rect>
                                            </g>
                                        </svg>
                                    </li>

                                    <li className="mt-5p">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-5p">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-0.5 text-gray-10 text-xss dm-sans ">
                                        (5 Reviews)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-13 md:text-sm text-gray-12 dm-sans">
                            $80
                        </p>
                        <p className="mt-1 md:mt-0 text-11 font-medium line-through text-gray-10 pl-1 mt-0.5">
                            $99
                        </p>
                    </div>
                </div>
                <div>
                    <div className="border rev-img rounded-md relative">
                        <div className="h-[360px] flex justify-center items-center">
                            <div className="absolute left-2.5 top-2.5">
                                <p className="bg-[#fcca19] h-4 w-max relative text-gray-12 mb-2.5 px-2 py-1 flex items-center justify-center rounded-sm leading-3 roboto-medium font-medium z-10 text-8 whitespace-nowrap uppercase">25.37% off</p>
                            </div>
                            <img className="w-full h-full object-cover rounded-md" src="https://demo.martvill.techvill.net/public/uploads/sizes/medium/20221129/e7bf0e48ef030f688794f19fce42e580.jpg" alt="" />
                        </div>
                        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                            <div className="absolute flex justify-center h-6 cursor-pointer top-15p right-15p">
                                <a href="javascript:void(0)" className="relative block w-fill">
                                    <div slot="icon" className="relative left-2">


                                        <div className="wishlist h-6 w-6 p-1 mb-2 text-gray-12 relative hover:bg-[#fcca19] border border-gray-2 rounded-full bg-white add-wishlist">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                                </path>
                                            </svg>
                                        </div>


                                        <div className="h-6 w-6 p-1 absolute mb-2 text-gray-12 bg-white hover:bg-[#fcca19] border border-gray-2 rounded-full compare-bg add-to-compare ">
                                            <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.04937 0.737095C2.01173 0.743939 1.89539 0.767892 1.79274 0.788423C1.69008 0.808954 1.46082 0.8945 1.28288 0.980046C1.01256 1.11008 0.9099 1.18193 0.677215 1.41462C0.44453 1.65073 0.372671 1.74996 0.242641 2.02029C0.0407524 2.44117 -0.00373152 2.63964 -0.000309674 3.09474C0.00653401 3.66277 0.170782 4.11103 0.547185 4.56956C0.776448 4.84673 1.22129 5.14443 1.59427 5.26419L1.72088 5.30525L1.73456 8.16933C1.74825 11.3516 1.73456 11.1737 1.98436 11.6836C2.27864 12.2892 2.84324 12.7478 3.50708 12.9188C3.68501 12.9668 3.95192 12.9804 4.93741 12.9907L6.14874 13.0078L5.69706 13.4595L5.2488 13.9078L5.65942 14.3184L6.07004 14.729L7.06579 13.7367C7.61329 13.1892 8.08208 12.6964 8.10946 12.6348C8.17105 12.4945 8.17105 12.3098 8.10946 12.1695C8.08208 12.1079 7.61329 11.6151 7.06579 11.0676L6.07004 10.0753L5.65942 10.4859L5.2488 10.8965L5.70048 11.3516L6.15558 11.8068L4.94083 11.7965L3.72608 11.7862L3.55498 11.6938C3.34967 11.5843 3.13068 11.3619 3.02118 11.1532L2.93905 10.9992L2.92879 8.15223L2.92194 5.30868L3.04855 5.26419C4.08195 4.93227 4.76632 3.87492 4.63971 2.821C4.51994 1.84919 3.90059 1.10665 2.97327 0.822641C2.74401 0.750783 2.19993 0.699455 2.04937 0.737095ZM2.59687 1.93132C3.1341 2.07161 3.47628 2.50961 3.47628 3.06053C3.47628 3.33427 3.41469 3.53274 3.26071 3.74147C3.04513 4.04602 2.71321 4.21026 2.32312 4.21369C1.76878 4.21369 1.33079 3.8715 1.19049 3.32059C1.03993 2.71834 1.41291 2.10241 2.03226 1.93474C2.27521 1.86972 2.35392 1.86972 2.59687 1.93132Z" fill="#2C2C2C"></path>
                                                <path d="M6.90107 1.74983C6.35015 2.30075 5.88478 2.79692 5.86425 2.84825C5.81634 2.9817 5.81976 3.16305 5.87794 3.29308C5.90531 3.35468 6.3741 3.84742 6.9216 4.39492L7.91735 5.38725L8.32797 4.97663L8.7386 4.56601L8.28691 4.1109L7.83181 3.6558L9.04656 3.66607L10.2613 3.67633L10.4324 3.76872C10.6377 3.87822 10.8567 4.10064 10.9662 4.30937L11.0483 4.46335L11.0586 7.31033L11.0654 10.1539L10.9388 10.1984C10.5248 10.3318 10.0697 10.65 9.81305 10.9922C9.48798 11.42 9.34084 11.8614 9.34084 12.402C9.34084 13.0522 9.56326 13.586 10.0218 14.0445C10.3263 14.3491 10.6035 14.5167 11.0312 14.6468C11.3939 14.7597 11.9346 14.7597 12.2973 14.6468C13.0946 14.4004 13.6626 13.8392 13.9022 13.0556C14.2546 11.9059 13.6181 10.6466 12.4718 10.2292L12.2665 10.1539L12.2528 7.3069C12.2426 4.7371 12.2357 4.44282 12.1844 4.24093C12.003 3.57368 11.5274 2.99538 10.9183 2.70453C10.4803 2.49922 10.405 2.48895 9.06709 2.47184L7.83865 2.45473L8.29033 2.00305L8.7386 1.55479L8.33482 1.15101C8.11582 0.932014 7.9242 0.750657 7.91735 0.750657C7.90709 0.750657 7.44856 1.20234 6.90107 1.74983ZM12.0646 11.3105C12.4171 11.4336 12.6942 11.7519 12.7969 12.142C13.0056 12.9632 12.2255 13.7434 11.4042 13.5347C10.6548 13.343 10.2921 12.5663 10.6275 11.8751C10.8772 11.3618 11.5103 11.112 12.0646 11.3105Z" fill="#2C2C2C"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <button className="open-view-modal">
                                <p className="text-gray-12 font-medium absolute inset-x-0 bottom-0 rounded rounded-t-none text-center text-11 bg-[#fcca19]">
                                    Quick View</p>
                            </button>
                        </div>
                    </div>
                    <div className="sm:text-center flex flex-col">
                        <a href="https://demo.martvill.techvill.net/products/cryptinvest---wallet-growth-investment-addon">
                            <p className="text-13 md:text-sm text-gray-12 md:mt-2 dm-regular line-clamp">CryptInvest - Wallet Growth Investment Addon</p>
                        </a>
                        <div className="item-rating order-first md:order-none md:mt-0 mt-2">
                            <div className="self-top">
                                <ul className="flex sm:justify-center -space-x-1">

                                    <li className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 primary-text-color" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 primary-text-color" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-5p">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-5p">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-5p">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                        </svg>
                                    </li>

                                    <li className="mt-0.5 text-gray-10 text-xss dm-sans ">
                                        (1 Review)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-13 md:text-sm text-gray-12 dm-sans">
                            $100
                        </p>
                        <p className="mt-1 md:mt-0 text-11 font-medium line-through text-gray-10 pl-1 mt-0.5">
                            $134
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5 md:hidden">
                <SeeMoreBtn />
            </div>

        </section>
    )
}

export default DigiproIndex