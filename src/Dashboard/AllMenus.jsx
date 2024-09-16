import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllMenus = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://simple-food-server.vercel.app/food')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://simple-food-server.vercel.app/delete/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your item has been deleted.",
                                    icon: "success"
                                });

                                const remaining = foods.filter(i => i._id !== _id);
                                setFoods(remaining)
                                // console.log('delete');
                              
                            }
                        })
                }
            })

    }


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
                        foods.reverse().map((food, index) =>
                            <tr key={food._id}>
                                <th>
                                    <label>
                                        {index + 1}
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
                                <td>{food.meal_plan}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Small Meal</button>
                                </th>
                                <th className="flex gap-4">
                                    <Link  to={`/dashboard/update/${food._id}`}> <BiEdit className="size-8"></BiEdit></Link>
                                    <Link onClick={() => handleDelete(food._id)}><RiDeleteBin5Line className="size-8" />                            </Link>
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