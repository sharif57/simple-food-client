
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// Import Swiper and SwiperSlide from swiper/react
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
// import {FreeMode, Pagination} from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';

const Trending = () => {
    return <div>
        <h1 className="text-5xl font-semibold text-center mt-16">New & Trending menu</h1>
        <div>



            <div className=" px-8">
               
                <div className='mt-12'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper "
                    >
                        <SwiperSlide>
                            <div className="flex  p-4  flex-col rounded-lg bg-white shadow-sm border-2  border-slate-500 my-6">
                                <div className="flex flex-col  gap-4 text-slate-800">
                                    <img className='' src="/public/Rectangle 15 (1).png" alt="" />
                                    <p className='text-yellow-400 flex gap-2 items-center'><FaStar />4.5/5</p>
                                    <h1 className='text-2xl font-bold'>Heathy Food Name</h1>
                                    <p className='font-bold'>$100</p>
                                    <button className='btn bg-[#6ea963]'>Add to cart</button>
                                    <div className='flex justify-around items-center text-red-400'>
                                        <p>Protein 49g</p>/
                                        <p>Carbs 23g</p>/
                                        <p>Fat 23g</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex  p-4  flex-col rounded-lg bg-white shadow-sm border-2  border-slate-500 my-6">
                                <div className="flex flex-col  gap-4 text-slate-800">
                                    <img className='' src="/public/Rectangle 15 (2).png" alt="" />
                                    <p className='text-yellow-400 flex gap-2 items-center'><FaStar />4.5/5</p>
                                    <h1 className='text-2xl font-bold'>Heathy Food Name</h1>
                                    <p className='font-bold'>$100</p>
                                    <button className='btn bg-[#6ea963]'>Add to cart</button>
                                    <div className='flex justify-around items-center text-red-400'>
                                        <p>Protein 49g</p>/
                                        <p>Carbs 23g</p>/
                                        <p>Fat 23g</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex  p-4  flex-col rounded-lg bg-white shadow-sm border-2  border-slate-500 my-6">
                                <div className="flex flex-col  gap-4 text-slate-800">
                                    <img className='' src="/public/Rectangle 15 (3).png" alt="" />
                                    <p className='text-yellow-400 flex gap-2 items-center'><FaStar />4.5/5</p>
                                    <h1 className='text-2xl font-bold'>Heathy Food Name</h1>
                                    <p className='font-bold'>$100</p>
                                    <button className='btn bg-[#6ea963]'>Add to cart</button>
                                    <div className='flex justify-around items-center text-red-400'>
                                        <p>Protein 49g</p>/
                                        <p>Carbs 23g</p>/
                                        <p>Fat 23g</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex  p-4  flex-col rounded-lg bg-white shadow-sm border-2  border-slate-500 my-6">
                                <div className="flex flex-col  gap-4 text-slate-800">
                                    <img className='' src="/public/Rectangle 15 (1).png" alt="" />
                                    <p className='text-yellow-400 flex gap-2 items-center'><FaStar />4.5/5</p>
                                    <h1 className='text-2xl font-bold'>Heathy Food Name</h1>
                                    <p className='font-bold'>$100</p>
                                    <button className='btn bg-[#6ea963]'>Add to cart</button>
                                    <div className='flex justify-around items-center text-red-400'>
                                        <p>Protein 49g</p>/
                                        <p>Carbs 23g</p>/
                                        <p>Fat 23g</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex  p-4  flex-col rounded-lg bg-white shadow-sm border-2  border-slate-500 my-6">
                                <div className="flex flex-col  gap-4 text-slate-800">
                                    <img className='' src="/public/Rectangle 15 (1).png" alt="" />
                                    <p className='text-yellow-400 flex gap-2 items-center'><FaStar />4.5/5</p>
                                    <h1 className='text-2xl font-bold'>Heathy Food Name</h1>
                                    <p className='font-bold'>$100</p>
                                    <button className='btn bg-[#6ea963]'>Add to cart</button>
                                    <div className='flex justify-around items-center text-red-400'>
                                        <p>Protein 49g</p>/
                                        <p>Carbs 23g</p>/
                                        <p>Fat 23g</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex  p-4  flex-col rounded-lg bg-white shadow-sm border-2  border-slate-500 my-6">
                                <div className="flex flex-col  gap-4 text-slate-800">
                                    <img className='' src="/public/Rectangle 15 (1).png" alt="" />
                                    <p className='text-yellow-400 flex gap-2 items-center'><FaStar />4.5/5</p>
                                    <h1 className='text-2xl font-bold'>Heathy Food Name</h1>
                                    <p className='font-bold'>$100</p>
                                    <button className='btn bg-[#6ea963]'>Add to cart</button>
                                    <div className='flex justify-around items-center text-red-400'>
                                        <p>Protein 49g</p>/
                                        <p>Carbs 23g</p>/
                                        <p>Fat 23g</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>

        </div>
    </div>;
};
export default Trending;