import React from "react";
import MenuItem from "./MenuItem";

import data from "../models/data";
import MenuItemNotFound from "./MenuItemNotFound";

function MainBox({ searchBy, filterBy, products }) {
  const searchbarFilter = (products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchBy.toLowerCase())
    );
  };
  const dropdownFilter = (products) => {
    return filterBy === "all"
      ? products
      : products.filter((product) => product.category === filterBy);
  };

  const both = dropdownFilter(searchbarFilter(products));

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4">
        {both.length > 0 ? (
          both.map((product) => (
            <>
              {console.log(both)}
              <MenuItem product={product} key={product.id} />
            </>
          ))
        ) : (
          <MenuItemNotFound key={searchBy} item={searchBy} />
        )}
      </div>
    </>
  );
}

export default MainBox;
