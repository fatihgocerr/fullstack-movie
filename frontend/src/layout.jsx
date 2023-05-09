import {Outlet} from "react-router-dom"
import React, { useState } from "react";
import { LeftSideMenu } from "./components/LeftSideMenu";
import { SearchBar } from "./components/SearchBar";
import { RightSideMenu } from "./components/RightSideMenu";

const Layout = () => {
 

  return (
    <div className="grid grid-cols-12 gap-2">


      <div className="col-span-3 lg:col-span-2">
        <LeftSideMenu />
      </div>
      

        <div className="col-span-9 lg:col-span-10 mt-4 mr-2">
          <div className="grid grid-cols-12 ">

              <div className="col-span-9 lg:col-span-10 ">
                <SearchBar />
              </div>
              <div className="col-span-3 lg:col-span-2">
                    <RightSideMenu />
              </div>
          </div>
      
         
          <Outlet />
        </div>
        
     
    </div>
  );
};

export default Layout;
