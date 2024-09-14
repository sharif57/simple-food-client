import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AddMenu = () => {
    return <div className="bg-white p-4 rounded-lg">
        <Link to={'/dashboard/allMenus'} className="flex gap-3 items-center mb-4"><FaArrowLeft />        Back</Link>
        <h1 className="text-2xl font-semibold text-green-400">Add Food menu</h1>
        <div>
            <form>
                <div className="flex items-center justify-between gap-6 ">
                    <div className=" w-full ">
                        <label className="text-sm ">Name</label>
                        <input name="name" type="text" placeholder="First name" className="w-full border-4 h-12 rounded-lg mt-2" />
                    </div>
                    <div className=" w-full ">
                        <label className="text-sm ">Image</label>
                        <input name="image" type="text" placeholder="Image" className="w-full border-4 h-12 rounded-lg mt-2" />
                    </div>
                    <div className=" w-full ">
                        <label className="text-sm ">Price</label>
                        <input name="price" type="text" placeholder="Image" className="w-full border-4 h-12 rounded-lg mt-2" />
                    </div>
                </div>

                <div className="flex w-3/4 mt-6   items-center justify-between gap-6 ">
                    <div className=" w-full ">
                        <label className="text-sm ">Protin</label>
                        <input name="protin" type="text" placeholder="55g" className="w-full border-4 h-12 rounded-lg mt-2" />
                    </div>
                    <div className=" w-full ">
                        <label className="text-sm ">Carbs</label>
                        <input name="carbs" type="text" placeholder="25g" className="w-full border-4 h-12 rounded-lg mt-2" />
                    </div>
                    <div className=" w-full ">
                        <label className="text-sm ">Fat</label>
                        <input name="Fat" type="text" placeholder="20g" className="w-full border-4 h-12 rounded-lg mt-2" />
                    </div>
                </div>
                <div className=" w-full mt-6">
                    <label className="text-sm ">Details</label>
                    <input name="details" type="text" placeholder="type your hair style name" className="w-full px-3 border-4 h-24 rounded-lg mt-2" />
                </div>
                <div className=" w-full mt-6">
                    <label className="text-sm ">Ingredients</label>
                    <input name="ingredients" type="text" placeholder="type your hair style name" className="w-full px-3 border-4 h-24 rounded-lg mt-2" />
                </div>
                <div className=" w-full mt-6">
                    <label className="text-sm ">Instructions</label>
                    <input name="instructions" type="text" placeholder="type your hair style name" className="w-full px-3 border-4 h-24 rounded-lg mt-2" />
                </div>
                <div className="flex justify-between items-center gap-9 mt-6">
                    <div className="w-full">
                        <label>Our menu</label>
                        <select className="select select-bordered w-full mt-2">
                            <option>Dinner</option>
                            <option>Lunch</option>
                            <option>Breakfast</option>
                            <option>Snack</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label>Meal Plan</label>
                        <select className="select select-bordered w-full mt-2">
                            <option>Small Meal</option>
                            <option>Small Paleo Meal</option>
                            <option>Medium Meal</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex flex-col justify-center items-center  ">
                    <button className="btn btn-success w-1/3 mx-auto ">Submit menu</button>
                </div>
            </form>
        </div>
    </div>;
};
export default AddMenu;