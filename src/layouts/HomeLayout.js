import React from 'react'
import HeaderIndex from '../pages/header/HeaderIndex'
import BannerIndex from '../sections/banner/BannerIndex'
import TopCategory from '../sections/top-category/TopCategory'
import BestDealIndex from '../sections/best-deal/BestDealIndex'

function HomeLayout() {
  return (
    <div>
        <HeaderIndex />
        <BannerIndex />
        <TopCategory />
        <BestDealIndex /> 
    </div>
  )
}

export default HomeLayout