import Head from "next/head";
import BottomNavbar from "./BottomNavbar";
import Navbar from "./Navbar";
import { Store } from "../utils/Store";
import React, { useState, useContext, useEffect } from "react";

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <div>
        <Head>
          <title>{title ? title + " - Resturant" : "Resturant"}</title>
          <meta name="description" content="Ecommerce Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Navbar cartItemsCount={cartItemsCount} />
        </header>
        <main className="container">{children}</main>

        <BottomNavbar
          cartItemsCount={cartItemsCount}
          dispatch={dispatch}
        ></BottomNavbar>
      </div>
    </>
  );
}
