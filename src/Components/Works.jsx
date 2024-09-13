const Works = () => {
    return <div>
        <div className="mt-12 bg-[#f1f1f1] p-6 rounded-lg mb-5">
            <h1 className="text-5xl font-bold">How it Works</h1>
            <p className="mt-3 w-1/2">Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-4/5
mt-10 mx-auto gap-12">
                <div className="flex justify-between items-center gap-6">
                    <img src="https://i.ibb.co.com/n0wj12Y/Vector.png" alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">Weekly Delivery</h1>
                        <p className="">Subscribe for free shipping. Just pick your meals, tell us how often you want them, and then we’ll take care of the rest.</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-6">
                    <img src="https://i.ibb.co.com/Wf61cXy/Group-1.png" alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">Cancel Anytime</h1>
                        <p>Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest.</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-6">
                    <img src="https://i.ibb.co.com/m4fh5vH/fi-7259327.png" alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">Pause Anytime</h1>
                        <p>Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest.</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-6">
                    <img src="https://i.ibb.co.com/ckzm13F/fi-7046164.png" alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">Pause Anytime</h1>
                        <p>Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest.</p>
                    </div>
                </div>
            </div>
        </div>

        <h1 className="text-5xl font-semibold mt-14 text-center ">Why Simply Good Food </h1>
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
export default Works;



