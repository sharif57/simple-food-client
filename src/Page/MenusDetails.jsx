import { FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenusDetails = () => {
    const data = useLoaderData()

    const [foods, setFood] = useState([]);

    useEffect(() => {
        fetch('https://simple-food-server.vercel.app/food')
            .then(res => res.json())
            .then(data => setFood(data))
            .catch(err => console.error("Failed to fetch food data:", err));
    }, []);

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

            <h1 className="text-5xl font-semibold text-start px-8 mt-20">Related products</h1>
            <div className="px-8 mt-12">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {foods.map(food => (
                        <SwiperSlide key={food._id}>
                            <div className="flex p-4 flex-col rounded-lg bg-white shadow-sm border-2  my-6">
                                <div className="flex flex-col gap-4 text-slate-800">
                                    <img className='h-72 rounded-lg' src={food.image} alt={food.name} />
                                    <p className='text-yellow-400 flex gap-2 items-center'>
                                        <FaStar />{food.rating}/5
                                    </p>
                                    <h1 className='text-2xl font-bold'>{food.name}</h1>
                                    <p className='font-bold'>${food.price}</p>
                                    <Link to={`/foodDetails/${food._id}`} className='btn bg-[#6ea963]'>Add to cart</Link>
                                    <div className='flex justify-around items-center text-red-400'>
                                        <p>Protein {food.protein}g</p>/
                                        <p>Carbs {food.carbs}g</p>/
                                        <p>Fat {food.fat}g</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>;
};
export default MenusDetails;