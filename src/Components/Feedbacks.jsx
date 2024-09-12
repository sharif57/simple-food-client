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

const Feedbacks = () => {
    return <div>


        <div className=" px-8">
            <h1 className='text-5xl font-semibold text-center mt-16'>Feedbacks</h1>

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
                        <div className="flex  p-4  flex-col rounded-lg bg-[#fdfdfd] shadow-sm my-6">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img className="size-28 rounded-full" src="https://i.ibb.co.com/z6FB8pB/20240502162307521-jpeg.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">Sharif Mahamud</h1>
                                    <p className="text-orange-400">student</p>
                                    <p>Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex  p-4  flex-col rounded-lg bg-[#fdfdfd] shadow-sm my-6">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img className="size-28 rounded-full" src="https://i.ibb.co.com/3BS6hYj/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-we.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">Jone</h1>
                                    <p className="text-orange-400">student</p>
                                    <p>I appreciate the top-notch service provided! It was both safe and effective. I'll happily recommend your services to my friends.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex  p-4  flex-col rounded-lg bg-[#fdfdfd] shadow-sm my-6">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img className="size-28 rounded-full" src="https://i.ibb.co.com/x2SPyRG/young-bearded-man-with-striped-shirt-1.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">Mac smith</h1>
                                    <p className="text-orange-400">student</p>
                                    <p>Thanks for the excellent and secure service! It was a pleasure working with you. I'll definitely spread the word about your fantastic services.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex  p-4  flex-col rounded-lg bg-[#fdfdfd] shadow-sm my-6">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img className="size-28 rounded-full" src="https://i.ibb.co.com/yRStCVw/young-woman-eye-reflects-colorful-summer-nature-generated-by-ai.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">Drived</h1>
                                    <p className="text-orange-400">student</p>
                                    <p>I’m grateful for the exceptional service you provided. It was secure and hassle-free. I will definitely suggest your services to my friends.
</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="  p-4  rounded-lg bg-[#fdfdfd] shadow-sm my-6">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img className="size-28 rounded-full" src="https://i.ibb.co.com/ZH4dZx2/graffiti-screaming-boy-3.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">Mark Jocker bak</h1>
                                    <p className="text-orange-400">student</p>
                                    <p>The service was excellent and very secure. I’m impressed and will definitely let my friends know about your fantastic services.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                   


                </Swiper>
            </div>
        </div>
    </div>;
};
export default Feedbacks;