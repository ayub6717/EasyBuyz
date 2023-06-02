import React from 'react'
import HeaderIndex from '../pages/header/HeaderIndex'
import BannerIndex from '../sections/banner/BannerIndex'
import TopCategory from '../sections/top-category/TopCategory'
import BestDealIndex from '../sections/best-deal/BestDealIndex'
import ElelctronicIndex from '../sections/Electronics/ElelctronicIndex'

function HomeLayout() {
  return (
    <div>
        <HeaderIndex />
        <BannerIndex />
        <TopCategory />
        <BestDealIndex /> 
        <ElelctronicIndex />
    </div>
  )
}

export default HomeLayout