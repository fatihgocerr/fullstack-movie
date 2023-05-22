import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { LeftSideMenu } from './components/LeftSideMenu'
import { SearchBar } from './components/SearchBar'
import { RightSideMenu } from './components/RightSideMenu'

const Layout = () => {
  return (
    <div className="flex">
      <div className="hidden md:block md:flex-[1_1_15%]">
        <LeftSideMenu />
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex-[10_1_20%] mt-4">
            <div className=" flex justify-between  md:grid sm:grid-cols-12 gap-4 mx-4">
              <div className="col-span-1 md:hidden flex items-center">
                <label htmlFor="my-drawer" className=" drawer-button">
                  <BiMenuAltLeft className=" text-4xl hover:text-gray-900 rounded-md" />
                </label>

                <h1 className="text-primary text-xl sm:text-2xl text-center font-bold italic p-4 ">
                  Movie PR
                </h1>
              </div>

              <div className="hidden md:block col-span-9 xl:col-span-10 ">
                <SearchBar />
              </div>

              <div className="col-span-3 xl:col-span-2 grid place-content-end">
                <RightSideMenu />
              </div>
            </div>

            <div className="m-4 md:hidden">
              <SearchBar />
            </div>
            <div className="m-4">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="md:hidden menu w-36 text-base-content">
            <LeftSideMenu />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Layout
