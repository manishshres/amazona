import CatergoryBar from "../components/CatergoryBar";
import Layout from "../components/Layout";
import MainBox from "../components/MainBox";
import SearchBar from "../components/SearchBar";

import React, { useState } from "react";

import data from "../models/data";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Layout>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CatergoryBar
          filter={filter}
          setFilter={setFilter}
          categories={data.categories}
        />
        <MainBox
          products={data.products}
          filterBy={filter}
          searchBy={searchTerm}
        />
      </Layout>
    </>
  );
}
