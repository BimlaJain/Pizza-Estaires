'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { PIZZA_SLIDERS } from '../utils/helper';
import Image from 'next/image';

const PizzaSlider = () => {
    return (
        <div className="w-full bg-white flex items-center gap-6 overflow-x-hidden max-w-[1920px] mx-auto ">
            <div className="lg:min-w-[550px] md:min-w-[300px] min-w-[150px] h-full overflow-hidden">
                <Image
                    src="/assets/images/png/pizza-fix-image.png"
                    alt="Pizza"
                    width={550}
                    height={348}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="flex-1">
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={20}
                    loop={true}
                    slidesPerGroup={1}
                    loopAdditionalSlides={1}
                    speed={900}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="w-full"
                >
                    {PIZZA_SLIDERS.map((slide, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-[541px] rounded-xl overflow-hidden"
                        >
                            <div
                                className="flex items-start gap-4 p-4 h-full"
                                style={{ backgroundColor: slide.bgColor }}
                            >
                                <Image
                                    width={172}
                                    height={172}
                                    src={slide.image}
                                    alt={slide.title}
                                    className="rounded-lg object-cover"
                                />
                                <div>
                                    <h3 className="text-2xl font-medium text-black">{slide.title}</h3>
                                    <p className="text-base text-gray-600 mt-1">{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PizzaSlider;
