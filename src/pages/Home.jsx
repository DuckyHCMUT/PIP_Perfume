import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import ProductDisplay from "../components/ProductDisplay";
import { useState } from "react";

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
            <ProductDisplay option={gender} /> {/* onChange success */}
            <Footer />
        </div>
    );
};

export let cartArr = [];

export default Home;
