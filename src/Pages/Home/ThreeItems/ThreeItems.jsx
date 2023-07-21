

const ThreeItems = ({ items }) => {
    const { img, name, detail } = items;

    return (
        <div className="card  w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{detail}</p>
                <div className="card-actions">
                    <button className="btn  btn-outline border-0 border-b-4 text-yellow-500">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ThreeItems;