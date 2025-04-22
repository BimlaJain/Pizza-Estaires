'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { CLIENTS_DATA } from '../utils/helper';
import Image from 'next/image';

const Clients = () => {
    const [swiper, setSwiper] = useState(null);

    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };
    const goNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };
    const handleSwiper = (swiperInstance) => {
        setSwiper(swiperInstance);
    };
    return (
        <div className="w-full py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-medium text-left mb-12">Avis Clients</h2>
                <div className="relative">
                    <Swiper
                        onSwiper={handleSwiper}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="testimonial-swiper"
                    >
                        {CLIENTS_DATA.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col justify-center items-center">
                                    <div className="text-left text-gray-700">
                                        <Image src="/assets/images/svg/commma.svg" alt='comma' width={62} height={62} />
                                        <Image src="/assets/images/svg/5star.svg" alt='comma' width={172} height={28} />
                                        <p className='font-semibold text-[22px] leading-[140%] py-3'>La meilleure pizza de la ville !</p>
                                        <p className="text-xl mb-5">"J’ai commandé chez Pizza Estaires pour la première fois et j’ai été bluffé ! La pâte était parfaitement croustillante, les ingrédients frais et la livraison ultra rapide. Mon nouveau pizzeria préféré !"</p>

                                        <p className="text-gray-900 font-semibold">Sophie M.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute 2xl:top-[-20%] xl:top-[-26%] top-[-19%]  w-full flex  gap-10 justify-between items-center px-4 lg:block hidden">
                        <button
                            onClick={goNext}
                            className=" rounded-full p-2 absolute xl:left-[95%] lg:left-[88%] shadow-md "
                        >
                            <Image src="/assets/images/svg/right-arrow.svg"
                                alt='right-arrow'
                                width={40}
                                height={60}
                                className=' w-[40px]'
                            />
                        </button>
                        <button
                            onClick={goPrev}
                            className=" rounded-full p-2   absolute  xl:left-[90%] lg:left-[80%] shadow-md"
                        >
                            <Image src="/assets/images/svg/left-arrow.svg"
                                alt='left-arrow'
                                width={40}
                                height={60}
                            />
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
