import React, { useEffect, useState } from 'react';

import ThreeItems from '../ThreeItems/ThreeItems';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const ItemsCards = () => {
    const [itemsCard, setItemsCard] = useState([]);

    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setItemsCard(data))
    }, [])
    return (

          <section>
            <SectionTitle
                subHeading={"------Should Try------"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    itemsCard.map(items => <ThreeItems
                        key={items._id}
                        items={items}
                    ></ThreeItems>)
                }
            </div>
           
        </section>
     
    );
};

export default ItemsCards;