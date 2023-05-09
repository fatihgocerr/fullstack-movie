import React, { useState } from "react";
import { BsBell } from "react-icons/bs";

export const RightSideMenu = () => {
  //stateler reduxdaki global statede tutulacak ve her bir apinin querisine eklenecek

  const [categories, setCategories] = useState([
    {
      name: "Aksiyon",
      checked: true,
    },
    {
      name: "Macera",
      checked: true,
    },
    {
      name: "Komedi",
      checked: true,
    },
  ]);

  return (
    <>
      <Profile />
     {/*  
      <SearchCheck
        title={"Kategoriler"}
        setCategories={setCategories}
        categories={categories}
      />

      <button
        onClick={handleFilter}
        className="btn btn-primary mt-4 capitalize">
        Filtrele
      </button> */}


      
    </>
  );
};

const Profile = () => {
  return (
    <div className="flex justify-center gap-2 md:gap-4 ">
      <div className="bg-base-300 rounded-full h-12 w-12  flex justify-center items-center">
        <div className="indicator">
          <span className="indicator-item  h-2 w-2 rounded-full bg-primary"></span>
          <BsBell size={"1.4rem"} />
        </div>
      </div>
      <img
        className="h-12 w-12   object-cover rounded-full"
        src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
      />
    </div>
  );
};


