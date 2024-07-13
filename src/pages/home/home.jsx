import Footer from "../../components/footer/footer";
import Products from "../../components/products/products";
import Banner from "../../components/banner/banner";
import { NavLink } from "react-router-dom";
import Pagination from "../../components/pagination";
const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Pagination/>
      <Footer />
    </div>
  );
};

export default Home;
