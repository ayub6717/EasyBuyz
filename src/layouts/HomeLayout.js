import React from 'react'
import HeaderIndex from '../pages/header/HeaderIndex'
import BannerIndex from '../sections/banner/BannerIndex'
import TopCategory from '../sections/top-category/TopCategory'

function HomeLayout() {
  return (
    <div>
        <HeaderIndex />
        <BannerIndex />
        <TopCategory />
    </div>
  )
}

export default HomeLayout