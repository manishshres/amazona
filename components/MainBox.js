import React from "react";
import MenuItem from "./MenuItem";

import data from "../models/data";

function MainBox() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4">
        {data.products.map((product) => (
          <MenuItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default MainBox;
