import { FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const MenusDetails = () => {
    const data = useLoaderData()
    return <div className="px-9 mt-10 mb-10">
        <div>
            <div className="flex justify-between items-center gap-6  w-3/4 mx-auto">
                <img className="h-[400px] w-[600px] rounded-[100px] border-4" src={data.image} alt="" />
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold">{data.name}</h1>
                    <p className='text-yellow-400 flex gap-2 items-center'><FaStar />{data.rating}/5</p>
                    <div className='flex justify-start gap-5 items-center text-red-400'>
                        <p>Protein {data.protein}</p>/
                        <p>Carbs {data.carbs}</p>/
                        <p>Fat {data.fat}</p>
                    </div>
                    <h1 className="text-2xl font-semibold">${data.price}</h1>
                    <p>{data.details}</p>

                    <button className='btn bg-[#6ea963] w-full'>Add to cart</button>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                        <div className="collapse-title text-xl font-medium">Ingredients</div>
                        <div className="collapse-content">
                            <p>{data.ingredients}</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                        <div className="collapse-title text-xl font-medium">Ingredients</div>
                        <div className="collapse-content">
                            <p>{data.instructions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default MenusDetails;