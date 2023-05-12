
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Activity,
  Archive,
  Film,
  Cast,
  Clipboard,
  AlignJustify,
  Coffee
} from "react-feather";

import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Nav = ({ sidebarOutsideClick }) => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);

  const sidebarClose = () => {
    setSidebarStatus(false);
  };

  const sidebarOpen = () => {
    setSidebarStatus(true);
  };

  const subMenuToggle = () => {
    setSubMenuToggleStatus(!subMenuToggleStatus);
  };
  const listMenu = [
    {title: "Category", icon: <AlignJustify className="h-10" />, linkHref: "/category"},
    {title: "Movie", icon: <Film className="h-10" />, linkHref: "/movies"},
    {title: "Series", icon: <Activity className='h-10' />, linkHref: "/series"},
    {title:"Anime", icon: <Coffee className="h-10" />, linkHref: "/anime"},
    // {title:"Genre", icon: <Archive className="h-10" />, linkHref: "/genre"},
    {title:"Stars", icon: <Cast className="h-10" />, linkHref: "/stars"},
    {title:"Scriptwriter", icon: <Clipboard className="h-10" />, linkHref: "/scriptwriters"},

  ]

   //if menu has chile menu then  use seperate array
   const childMenu = [
    {
      subMenuTitle: "child One",
      linkHref: "/"
    },
    {
      subMenuTitle: "child Two",
      linkHref: "/"
    },
    {
      subMenuTitle: "child Three",
      linkHref: "/"
    }
  ];

  useEffect(() => {
    if (sidebarOutsideClick) {
      setSidebarStatus(false);
    }
  }, [sidebarOutsideClick]);
  //console.log("sidebar Nav", sidebarOutsideClick)
  return (
    <>
      <nav className="flex flex-col mx-4 my-6 space-y-4 text-[#ff6a6a] w-full items-baseline ">

        {
          listMenu.map((item, index) => (
            <NavItem
             key={index}
              hrefLink={item.linkHref}
              sidebarStatus={sidebarStatus}
              menuTitle={item.title}
              subMenu={false}
              subMenuArray={null}
              >
              {item.icon}
            </NavItem>
          ))
        }
        {/* this menu has child Menu     */}
        <NavItem
          hrefLink='#'
          sidebarStatus={sidebarStatus}
          menuTitle="Chiled Menu"
          subMenu={true}
          subMenuArray={childMenu}
        >
          <Film className="h-10" />
        </NavItem>
        <div className="inline-flex items-center justify-center w-full pr-6 ">
          {sidebarStatus ? (
           <ArrowLeftCircle
            className="inline-block h-12 cursor-pointer "
            onClick={sidebarClose}
           />
          ) : (
           <ArrowRightCircle
            className="inline-block h-12 cursor-pointer"
            onClick={sidebarOpen}
           />
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
