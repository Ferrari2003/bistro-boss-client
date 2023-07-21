import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
            {/* main cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offered menu  items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory coverImg={dessertImg} items={desserts} title={"dessert"} />
            {/* pizza menu items */}
            <MenuCategory coverImg={pizzaImg} items={pizza} title={"pizza"} />
            {/* pizza menu items */}
            <MenuCategory coverImg={saladImg} items={salad} title={"salad"} />
            {/* pizza menu items */}
            <MenuCategory coverImg={soupImg} items={soup} title={"soup"} />
        </div>
    );
};

export default Menu;