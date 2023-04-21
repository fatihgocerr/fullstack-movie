import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { RiSlideshow3Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { BiLogOut } from "react-icons/bi";

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
      icon: <BsCameraReels size={"1.4rem"} />,
    },
    {
      name: "Diziler",
      url: "/series",
      icon: <RiSlideshow3Line size={"1.4rem"} />,
    },
    {
      name: "Yakında",
      url: "/upcoming",
      icon: <SlCalender size={"1.4rem"} />,
    },
    {
      name: "Çıkış",
      icon: <BiLogOut size={"1.4rem"} />,
    },
  ];

  return (
    <div className="col-span-2 h-screen bg-[#212121] rounded-tr-2xl rounded-br-2xl">
      <h1 className="text-[#3DD2CC] text-3xl font-bold italic text-center my-10">
        Movie PR
      </h1>
      <ul className="mt-10">
        {links.map((link, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-lg hover:bg-primary-focus p-5 pl-10text-center cursor-pointer hover:border-r-4 border-[#63dad6] hover:text-gray-700 hover:font-semibold transition duration-300"
          >
            {link.icon} {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
