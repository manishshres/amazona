import React from "react";

import categories from "../models/categories";

function CatergoryBar() {
  return (
    <div className="uppercase mb-2 mt-4">
      <select
        id="catergory"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
      >
        <option defaultValue>ALL</option>
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
