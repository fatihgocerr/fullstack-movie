import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { LeftSideMenu } from './components/LeftSideMenu'
import { SearchBar } from './components/SearchBar'
import { RightSideMenu } from './components/RightSideMenu'

const Layout = () => {
  return (
    <div className="flex">
      <div className="flex-[1_1_5%]">
        <LeftSideMenu />
      </div>

      <div className="flex-[10_1_20%] mt-4 mx-2">
        <div className="flex flex-col-reverse gap-2 sm:grid sm:grid-cols-12 ">
          <div className=" sm:col-span-8 lg:col-span-10 ">
            <SearchBar />
          </div>
          <div className="sm:col-span-4 lg:col-span-2 pr-2">
            <RightSideMenu />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  )
}

export default Layout
