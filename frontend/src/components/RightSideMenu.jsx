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
    <div className="my-8 col-span-2 m-4">
      <IsProfile />
      <SearchCheck
        title={"Kategoriler"}
        setCategories={setCategories}
        categories={categories}
      />

      <button
        onClick={handleFilter}
        className="btn btn-primary mt-4 capitalize"
      >
        Filtrele
      </button>
    </div>
  );
};

const IsProfile = () => {
  return (
    <div className="flex justify-end gap-4">
      <div className="bg-base-300 rounded-full p-4 flex justify-center items-center">
        <div className="indicator">
          <span className="indicator-item  h-2 w-2 rounded-full bg-primary"></span>
          <BsBell size={"1.4rem"} />
        </div>
      </div>
      <img
        className="h-14 w-14 object-cover rounded-full"
        src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
      />
    </div>
  );
};

const SearchCheck = ({ categories, title, setCategories }) => {
  const onChange = (e) => {
    setCategories((prev) =>
      prev.map((category) => {
        if (e.target.name === category.name) {
          return { ...category, checked: !category.checked };
        }
        return category;
      })
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-10 mb-4">
        <h1 className="text-lg text-white tracking-wide">{title}</h1>
      </div>
      <div className="bg-base-300 rounded-2xl p-4 flex flex-col gap-4">
        {categories.map((category, i) => {
          return (
            <label
              key={i + "categories"}
              className="flex justify-between items-center border-b border-gray-600 pb-2"
            >
              <h2 className="text-white tracking-wide  text-sm">
                {category.name}
              </h2>
              <input
                type="checkbox"
                name={category.name}
                onChange={onChange}
                checked={category.checked}
                className="checkbox h-4 w-4 checkbox-accent"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};
