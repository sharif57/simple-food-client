import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Menus = () => {
  const [foods, setFood] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/food')
      .then(res => res.json())
      .then(data => setFood(data))
  }, [])
  console.log(foods.length);
  return <div>
    <div className="px-9 py-10 flex flex-row gap-11">
      <button className="btn hover:text-white text-black hover:bg-[#fdb64e] ">Full menus</button>
      <button className="btn hover:text-white text-black hover:bg-[#fdb64e]">Enteree</button>
      <button className="btn hover:text-white text-black hover:bg-[#fdb64e]">Breakfast</button>
      <button className="btn hover:text-white text-black hover:bg-[#fdb64e]">Snacks</button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-9">
      {
        foods.map(food => <div key={food._id}>
          <Link to={`/foodDetails/${food._id}`} className="flex   p-4  flex-col rounded-lg bg-white shadow-sm border-2  ">
            <div className="flex flex-col  gap-4 text-slate-800">
              <img className='h-72 rounded-lg' src={food.image} alt="" />
              <p className='text-yellow-400 flex gap-2 items-center'><FaStar />{food.rating}/5</p>
              <h1 className='text-2xl font-bold'>{food.name}</h1>
              <p className='font-bold'>${food.price}</p>
              <button className='btn bg-[#6ea963]'>Add to cart</button>
              <div className='flex justify-around items-center text-red-400'>
                <p>Protein {food.protein}</p>/
                <p>Carbs {food.carbs}</p>/
                <p>Fat {food.fat}</p>
              </div>
            </div>
          </Link>
        </div>)
      }
    </div>

  </div>;
};
export default Menus;