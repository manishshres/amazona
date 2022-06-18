import React, { useContext } from "react";
import { Store } from "../utils/Store";
// import CategoryDropDown from "./CategoryDropDown";

export default function Modal({ product, setShowModal }) {
  const { state, dispatch } = useContext(Store);
  const closeModal = () => {
    setShowModal(false);
  };

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    closeModal();
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-xl font=semibold">{product.title}</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={closeModal}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 ">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              {product.description}
              {/* {product.spice.length !== 0 ? (
                <CategoryDropDown spices={product.spice} />
              ) : (
                ""
              )} */}
            </div>
            <div className="relative p-6 flex-auto"></div>

            {/* <div>
              <QuantityDropDown spices={product.spice} />
            </div> */}

            <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-transparent text-rose-500 font-bold uppercase text-sm px-6 border border-rose-600 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
