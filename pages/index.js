import CatergoryBar from "../components/CatergoryBar";
import Layout from "../components/Layout";
import MainBox from "../components/MainBox";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <Layout>
      <SearchBar />
      <CatergoryBar />
      <MainBox></MainBox>
    </Layout>
  );
}
