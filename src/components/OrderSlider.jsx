'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ORDER_SLIDERS } from '../utils/helper';

const PizzaSlider = () => {
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
        <div className="w-full  gap-6">
            <div className="container max-w-[1685px] mx-auto px-4 flex flex-col lg:flex-row  justify-between">
                <div className="bg-white px-10 py-12 rounded-2xl shadow-md flex-1  relative 2xl:max-w-[966px] xl:max-w-[850px] max-lg:mb-10 lg:max-w-[500px] w-full">
                    <h2 className="lg:text-5xl text-3xl font-bold text-center text-black max-w-[729px] mx-auto mb-4">
                        Nos incontournables du moment <span role="img" aria-label="fire">🔥</span>
                    </h2>
                    <p className="text-black mb-12 text-center  text-2xl max-w-[729px] mx-auto">
                        Découvrez les plats préférés de nos clients ! Des recettes savoureuses et incontournables, testées et approuvées.
                    </p>
                    <Swiper
                        onSwiper={handleSwiper}
                        slidesPerView={2}
                        spaceBetween={20}
                        loop={true}
                        loopAdditionalSlides={2}
                        navigation={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={700}
                        slidesPerGroup={1}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1, 
                            },
                            768: {
                                slidesPerView: 2, 
                            },
                            1024: {
                                slidesPerView: 2, 
                            },
                        }}
                        className="pizza-swiper"
                    >
                        {ORDER_SLIDERS.map((slide, index) => (
                            <SwiperSlide key={index} className="!w-[409px]">
                                <div className="rounded-2xl overflow-hidden bg-white shadow-sm w-[409px] flex flex-col h-full">
                                    <Image
                                        src={slide.image}
                                        alt="Fromages"
                                        width={409}
                                        height={433}
                                        className="w-full "
                                    />
                                    <div className="p-4 flex flex-col flex-1">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-2xl text-black font-semibold">4 Fromages</h3>
                                            <p className="font-semibold text-black text-2xl">12.99€</p>
                                        </div>
                                        <p className="text-black text-base mt-2 flex-1">{slide.description}</p>
                                        <button className="mt-4 w-full hover:bg-orange-500 hover:text-white text-black border border-black hover:border-none transition-all duration-500 ease-linear font-semibold py-2 text-xl rounded-[20px]">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-1/2 transform  w-full flex justify-between items-center px-4 lg:block hidden">
                        <button
                            onClick={goPrev}
                            className=" rounded-full p-2 left-[-7%] absolute shadow-md"
                        >
                            <Image src="/assets/images/svg/left-arrow.svg"
                                alt='left-arrow'
                                width={57}
                                height={85}
                            />
                        </button>
                        <button
                            onClick={goNext}
                            className=" rounded-full p-2 absolute right-[-2%] shadow-md"
                        >
                            <Image src="/assets/images/svg/right-arrow.svg"
                                alt='right-arrow'
                                width={57}
                                height={85}
                                className='w-full object-cover'
                            />
                        </button>
                    </div>

                </div>
                <div className=" 2xl:max-w-[655px] xl:max-w-[500px] lg:max-w-[400px] w-full bg-white lg:px-10 lg:py-12 p-6 rounded-2xl shadow-md flex-shrink-0">
                    <h2 className="lg:text-5xl text-3xl font-bold text-center mb-4 text-black ">
                        La nouveauté à ne pas manquer <span role="img" aria-label="star">⭐</span>
                    </h2>
                    <p className="text-center text-black mb-12 text-2xl">
                        Nouveauté du mois ! Un plat à découvrir absolument. Laissez-vous tenter !
                    </p>
                    <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                            src="/assets/images/png/mashroom.png"
                            alt="Pizza Fix"
                            width={400}
                            height={433}
                            className="w-full max-w-[420px] flex mx-auto"
                        /> 
                    </div>
                    <div className="flex justify-between items-center max-w-[400px] mx-auto">
                        <h3 className="text-2xl font-semibold text-black">4 Fromages</h3>
                        <p className="font-semibold text-black text-2xl">12.99€</p>
                    </div>
                    <p className="text-black text-base mt-2 max-w-[400px] mx-auto">
                        Mozzarella, cheddar, emmental & bleu sur une pâte croustillante.
                    </p>
                    <button className="mt-4 w-full hover:bg-orange-500 hover:text-white text-black border border-black hover:border-none transition-all duration-500 ease-linear font-semibold py-2 max-w-[400px] mx-auto flex justify-center items-center rounded-[20px]">
                        Order Now
                    </button>
                </div>
           </div>
        </div>
    );
};

export default PizzaSlider;
