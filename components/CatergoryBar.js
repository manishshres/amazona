import React from "react";

function CatergoryBar({ setFilter, categories }) {
  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="uppercase mb-2 mt-4">
      <select
        id="catergory"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        onChange={updateFilter}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CatergoryBar;
