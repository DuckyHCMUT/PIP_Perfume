import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Blankspace from "../components/Blankspace";
import Navbar from "../components/Navbar";
import ProductDisplay from "../components/ProductDisplay";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Banner />
      <Navbar />
      <ProductDisplay/>
      <Footer/>
    </div>
  );
};

export default Home;
