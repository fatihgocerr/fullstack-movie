import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { RiSlideshow3Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { HiOutlineLogout } from "react-icons/hi";
import {NavLink} from "react-router-dom"

export const LeftSideMenu = () => {
  const links = [
    {
      name: "Anasayfa",
      url: "/",
      icon: <AiOutlineHome size={"1.4rem"} />,
    },
    {
      name: "Filmler",
      url: "/movies",
      icon: <BsCameraReels size={"1.2rem"} />,
    },
    {
      name: "Diziler",
      url: "/series",
      icon: <RiSlideshow3Line size={"1.4rem"} />,
    },
    {
      name: "Yakında",
      url: "/upcoming",
      icon: <SlCalender size={"1.2rem"} />,
    },

  ];

  return (
    <div className="h-screen min-h-full bg-[#212121] rounded-tr-2xl rounded-br-2xl ">
      <div className="sticky top-0 ">
      <h1 className="text-[#3DD2CC] text-xl sm:text-3xl font-bold italic text-center py-4 px-2">
        Movie PR
      </h1>
      <ul className="relative" >
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.url}
            className={({isActive})=>`custom-link  ${isActive && "bg-primary-focus border-r-4  text-gray-700 font-semibold"}`}
          >
            <span className="">{link.icon} </span> <span >{link.name}</span>
          </NavLink>
        ))}
        <button className="custom-link w-full ">
        <HiOutlineLogout size={"1.4rem"} /> <span className="text-left">Çıkış</span>
        </button>
      
      </ul>
     
      </div>
      
    </div>
  );
};
