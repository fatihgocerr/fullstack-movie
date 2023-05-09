export const SearchCheck = ({ categories, title, setCategories }) => {
  
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
        <div className="flex justify-between items-center  mb-4">
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