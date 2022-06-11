import React, { useContext } from "react";
import { Store } from "../utils/Store";

function BottomNavbar() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    <div className="md:hidden">
      <nav className="fixed bottom-0 inset-x-0 bg-white flex justify-between text-sm text-gray-500 uppercase font-mono top">
        <a
          href="#"
          className="w-full block py-3 px-3 text-center hover:bg-red-200 hover:text-red-500 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-2 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </a>

        <a
          href="#"
          className="w-full block py-3 px-3 text-center hover:bg-red-200 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-2 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Account
        </a>

        <a
          href="#"
          className="w-full block py-3 px-3 text-center hover:bg-red-200 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-2 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Cart{" "}
          {cart.cartItems.length > 0 && (
            <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </span>
          )}
        </a>
      </nav>
    </div>
  );
}

export default BottomNavbar;
