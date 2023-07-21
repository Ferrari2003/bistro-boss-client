import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Category from "../Category/Category";
import Feature from "../Featured/Feature";
import ItemsCards from "../ItemCard/ItemCard";
import MiniSections from "../MiniSection/MiniSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet
             >
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <Banner2 />
            <PopularMenu />
            <ItemsCards />
            <MiniSections />
            <Feature />
            <Testimonials />
        </div>
    );
};

export default Home;