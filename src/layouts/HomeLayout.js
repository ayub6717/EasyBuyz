import React from 'react'
import HeaderIndex from '../pages/header/HeaderIndex'
import BannerIndex from '../sections/banner/BannerIndex'
import TopCategory from '../sections/top-category/TopCategory'
import BestDealIndex from '../sections/best-deal/BestDealIndex'
import ElelctronicIndex from '../sections/Electronics/ElelctronicIndex'
import ProductBnrIndex from '../sections/banner/ProductBnrIndex'

function HomeLayout() {
  return (
    <div>
        <HeaderIndex />
        <BannerIndex />
        <TopCategory />
        <BestDealIndex /> 
        <ElelctronicIndex />
        <ProductBnrIndex />
    </div>
  )
}

export default HomeLayout