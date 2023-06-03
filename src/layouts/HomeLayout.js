import React from 'react'
import HeaderIndex from '../pages/header/HeaderIndex'
import BannerIndex from '../sections/banner/BannerIndex'
import TopCategory from '../sections/top-category/TopCategory'
import BestDealIndex from '../sections/best-deal/BestDealIndex'
import ElelctronicIndex from '../sections/Electronics/ElelctronicIndex'
import ProductBnrIndex from '../sections/banner/ProductBnrIndex'
import DigiproIndex from '../sections/Digital-product/DigiproIndex'
import BrandIndex from '../sections/top-brand/BrandIndex'

function HomeLayout() {
  return (
    <div>
        <HeaderIndex />
        <BannerIndex />
        <TopCategory />
        <BestDealIndex /> 
        <ElelctronicIndex />
        <ProductBnrIndex />
        <DigiproIndex />
        <BrandIndex />
    </div>
  )
}

export default HomeLayout