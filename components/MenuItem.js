import React, { useState } from "react";
import Modal from "./Modal";

function MenuItem({ product }) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  return (
    <div className="bg-white rounded-md px-4 py-4 border-2 border-midnight">
      <h2 className="tracking-widest text-xs mb-1 text-rose-800 uppercase">
        {product.category}
      </h2>
      <h1 className="title-font text-lg text-midnight mb-3">{product.title}</h1>
      <p className="leading-relaxed text-sm mb-3">{product.description}</p>
      <div className="grid grid-flow-row grid-cols-2 gap-4 items-center justify-items-stretch">
        <div className="text-red-500 text-xl">${product.price}</div>
        <div className="justify-self-end">
          <button
            className="bg-midnight text-sm text-white rounded-lg px-4 py-2 addCartButton"
            onClick={openModal}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {showModal ? (
        <Modal product={product} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
}

export default MenuItem;
