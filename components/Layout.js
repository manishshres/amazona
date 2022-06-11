import Head from "next/head";
import React from "react";
import BottomNavbar from "./BottomNavbar";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <div>
        <Head>
          <title>{title ? title + " - Resturant" : "Resturant"}</title>
          <meta name="description" content="Ecommerce Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="container">{children}</main>

        <BottomNavbar></BottomNavbar>
      </div>
    </>
  );
}
