import { FaArrowTrendUp } from "react-icons/fa6";

const Daily = () => {
    return <div className="mt-10">
        <div className="flex justify-center items-center bg-gray-200 gap-8  h-[500px]">
            <div className="space-y-3 border-8 bg-white pr-16 pl-8 rounded-r-full py-10">
                <h1 className="text-4xl font-semibold">Make daily meals healthy and moderate</h1>
                <p>Ingredients are naturally rich and full of taste.</p>
                <button className="btn bg-[#6ea963]">Meal plans <FaArrowTrendUp className="size-8" />            </button>
            </div>
            <div>
                <img className=" h-[500px]" src="https://i.ibb.co.com/p3Mpqv2/Rectangle-49.png" alt="" />
            </div>
        </div>
    </div>;
};
export default Daily;