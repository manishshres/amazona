import React, { useContext } from "react";
import { Store } from "../utils/Store";

export default function Modal({ product, setShowModal }) {
  const { state, dispatch } = useContext(Store);
  const closeModal = () => {
    setShowModal(false);
  };

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
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
            <div className="relative p-6 flex-auto">{product.description}</div>

            <div>
              {/* {checkSpice ? (
                <div className="p-6 flex-auto justify-center">
                  <div className="mb-3 xl:w-96">
                    <label>Select Spice Level</label>
                    <select
                      className="form-select appearance-none block w-full   px-3   py-1.5      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="select example"
                    >
                      <option value="1" selected>
                        One
                      </option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              ) : (
                ""
              )} */}
            </div>
            <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                  <button className="py-2 hover:text-gray-700">
                    <svg
                      width="12"
                      height="2"
                      viewbox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.35">
                        <rect
                          x="12"
                          width="2"
                          height="12"
                          transform="rotate(90 12 0)"
                          fill="currentColor"
                        ></rect>
                      </g>
                    </svg>
                  </button>
                  <input
                    className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                    type="number"
                    placeholder="1"
                  />
                  <button className="py-2 hover:text-gray-700">
                    <svg
                      width="12"
                      height="12"
                      viewbox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.35">
                        <rect
                          x="5"
                          width="2"
                          height="12"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="12"
                          y="5"
                          width="2"
                          height="12"
                          transform="rotate(90 12 5)"
                          fill="currentColor"
                        ></rect>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
