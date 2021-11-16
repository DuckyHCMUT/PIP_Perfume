import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BannerLoggedIn from "../components/BannerLoggedIn";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import ProductDisplay from "../components/ProductDisplay";
import { useState } from "react";

function HomeLoggedIn(flag) {
    return (
        <div>
            <Announcement />
            <BannerLoggedIn />
            <Slider />
            <Navbar />
            <ProductDisplay />
            <Footer />
        </div>
    );
}

const Home = () => {
    const [gender, setGender] = useState("all");

    const handleGender = (gen) => {
        setGender(gen);
        console.log(gen);
    };

    return (
        <div>
            <Announcement />
            <Banner />
            <Slider />
            <Navbar onChange={handleGender} />
            <ProductDisplay option={gender} />
            <Footer />
        </div>
    );
};

export default Home;
