const Good = () => {
    return <div>
        <h1 className="text-5xl font-semibold mt-10 text-center ">Why Simply Good Food </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 px-9 mt-10">
            <div className=" flex flex-col justify-center items-center space-y-3">
                <img src="/public/fi_12192596.png" alt="" />
                <h1 className="text-2xl font-semibold">Health awareness</h1>
                <p className="text-center">Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
                <img src="/public/fi_2736046.png" alt="" />
                <h1 className="text-2xl font-semibold">More Protein</h1>
                <p className="text-center">Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
                <img src="/public/Group.png" alt="" />
                <h1 className="text-2xl font-semibold">Unending Variety</h1>
                <p className="text-center">Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.</p>
            </div>
        </div>
    </div>;
};
export default Good;