import React from 'react'
import HeaderIndex from '../header/HeaderIndex'
import BannerIndex from '../../pages/home/banner/BannerIndex'
import TopCategory from '../../pages/home/top-category/TopCategory'
import BestDealIndex from '../../pages/home/best-deal/BestDealIndex'
import ElelctronicIndex from '../../pages/home/Electronics/ElelctronicIndex'
import ProductBnrIndex from '../../pages/home/banner/ProductBnrIndex'
import DigiproIndex from '../../pages/home/Digital-product/DigiproIndex'
import BrandIndex from '../../pages/home/top-brand/BrandIndex'
import FeaturesProduct from '../../pages/home/features-product/FeaturesProduct'
import Sig from '../../pages/test/Sign'

function HomeLayout() {
  return (
    <div>
        <Sig />
        <HeaderIndex />
        <BannerIndex />
        <TopCategory />
        <BestDealIndex /> 
        <FeaturesProduct />
        <ElelctronicIndex />
        <ProductBnrIndex />
        <DigiproIndex />
        <BrandIndex />
    </div>
  )
}

export default HomeLayout