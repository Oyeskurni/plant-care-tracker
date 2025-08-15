import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";


const MainSlider = () => {
    const slides = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
            title: "Transform Your Space Into a Peaceful Garden Retreat",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
            title: "Crafting Outdoor Spaces That Inspire and Breathe",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        },
        {
            img: "https://images.pexels.com/photos/26151151/pexels-photo-26151151/free-photo-of-night-sky-filled-with-stars-reflecting-in-the-lake.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "We Turn Bare Spaces Into Blooming Landscapes",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        },
    ];

    return (
        <Swiper
            className="w-full h-full relative"
            loop={true}
            speed={800}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
        >
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    className="bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${slide.img})` }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Centered text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 ">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                            {slide.title}
                        </h1>
                        <p className="text-lg mb-6 text-center max-w-2xl">{slide.desc}</p>
                        <div>
                            <Link
                                to="/contact"
                                className="px-5 py-2 mr-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/services"
                                className="px-5 py-2 bg-white text-gray-800 font-bold rounded hover:bg-gray-200 transition"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSlider;
