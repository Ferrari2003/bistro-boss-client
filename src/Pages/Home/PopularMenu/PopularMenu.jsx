// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu"}>
            </SectionTitle>
            <div className=" grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="card-actions flex justify-center mt-6">
                <button className="btn btn-outline justify-center border-0 bg border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;