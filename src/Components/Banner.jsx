import { FaArrowTrendUp } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="flex justify-around items-center flex-wrap p-6 px-8 bg-gray-100">
            {/* Left Section */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Keep track of <span className="text-[#6ea963]">Fitness Goals</span>
                </h1>
                <p className="text-lg mt-4">Order on Simply Good Food</p>
                <button className="btn btn-warning mt-6">Explore Menu <FaArrowTrendUp className="size-7" />                </button>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                    <img className="border-[40px] border-[#6ea963] rounded-full p-8"
                        src="/Rectangle 4.png" alt="Fitness Image" />
                    {/* <img className="absolute top-0 left-0 w-full h-full"
                        src="/Ellipse 1 (1).png" alt="Background Overlay" /> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
