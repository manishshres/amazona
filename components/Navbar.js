import React, { useContext } from "react";
import Link from "next/link";
import { Store } from "../utils/Store";

function Navbar() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    <header className="flex justify-between text-rose-500 py-3 px-8 mb-0.5 shadow-md">
      <Link href="/">
        <a className="text-2xl font-bold">restaurant</a>
      </Link>

      <ul className="hidden md:flex flex-row items-center align-middle gap-4">
        <li>
          <Link href="/">
            <a className="bg-rose-500 text-white py-2 px-4 rounded-md">Home</a>
          </Link>
        </li>

        <li>
          <Link href="/cart" className="relative inline-block">
            <a>
              Cart
              {cart.cartItems.length > 0 && (
                <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              )}
            </a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>Account</a>
          </Link>
        </li>
      </ul>
      {/* <button className="md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>  */}
    </header>
  );
}

export default Navbar;
