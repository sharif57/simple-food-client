import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const Trending = () => {
    const [foods, setFood] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFood(data))
            .catch(err => console.error("Failed to fetch food data:", err)); 
    }, []);

    return (
        <div>
            <h1 className="text-5xl font-semibold text-center mt-16">New & Trending Menu</h1>
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
                                    <button className='btn bg-[#6ea963]'>Add to cart</button>
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
    );
};

export default Trending;
