import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import ProductDisplay from "../components/ProductDisplay";
import { useState } from "react";

const Home = () => {
    const [gender, setGender] = useState('all');
    const [searchValue, setSearchValue] = useState('');

    const handleGender = (gen) => {
        setGender(gen);
    };

    const handleSearch = (val) => {
        setSearchValue(val);
    };

    return (
        <div>
            <Announcement />
            <Banner onChange = {handleSearch} />
            <Slider />
            <Navbar onChange = {handleGender} />
            <ProductDisplay option = {gender} value = {searchValue} /> {/* onChange success */}
            <Footer />
        </div>
    );
};

export default Home;