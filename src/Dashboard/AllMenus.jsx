import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const AllMenus = () => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-around items-center mb-10">
            <h1>Add Menu</h1>
            <Link to={'/dashboard/addMenu'}
                className={"btn btn-success "}>
                <PiPlus className="size-6 "></PiPlus>
                Add Menu </Link>
        </div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="bg-yellow-200">
                    <tr>
                        <th>
                        S.no 
                        </th>
                        <th>Image</th>
                        <th>Menu name</th>
                        <th>Our Menu</th>
                        <th>Meal Plan</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        foods.map((food, index) =>
                            <tr key={food._id}>
                                <th>
                                    <label>
                                    {index +1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={food.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {food.name}

                                </td>
                                <td>{ food.meal_plan}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Small Meal</button>
                                </th>
                                <th className="flex gap-4">
                                    <Link> <BiEdit className="size-8"></BiEdit></Link>
                                    <Link><RiDeleteBin5Line className="size-8" />                            </Link>
                                </th>
                            </tr>
                        )
                    }

                </tbody>

            </table>
        </div>
    </div>;
};
export default AllMenus;