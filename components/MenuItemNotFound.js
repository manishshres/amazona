import React from "react";

function MenuItemNotFound({ item }) {
  return (
    <div className="bg-white rounded-md px-4 py-4 border-2 border-midnight">
      <h1 className="title-font text-lg text-midnight mb-3 text-center	">
        <strong>{item}</strong> not found!
      </h1>
    </div>
  );
}

export default MenuItemNotFound;
