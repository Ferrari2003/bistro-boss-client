
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 my-8 mx-auto text-center">
            <p className=" text-yellow-500 mb-3">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;