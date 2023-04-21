import React from "react";
import { LeftSideMenu } from "./components/LeftSideMenu";
import { SearchBar } from "./components/SearchBar";
import { RightSideMenu } from "./components/RightSideMenu";

const Layout = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <LeftSideMenu />

      <div className="col-span-10 grid grid-cols-10">
        <SearchBar />
        <RightSideMenu />
      </div>
    </div>
  );
};

export default Layout;
