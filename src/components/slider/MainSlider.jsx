import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";


import img1 from "../../assets/succulents-sl-1.jpg";
import img2 from "../../assets/ferns-sl-2.avif";
import img3 from "../../assets/tropical-sl-3.jpg";


const MainSlider = () => {
    const slides = [
        {
            img: img1,
            title: "Succulents — Low Maintenance, High Charm",
            desc: "Bring home the beauty of succulents — perfect for adding greenery to your space without extra care.",
        },
        {
            img: img2,
            title: "Ferns — Nature’s Lush and Timeless Elegance",
            desc: "Create a refreshing and calming atmosphere with the rich textures of beautiful ferns.",
        },
        {
            img: img3,
            title: "Tropical Plants — Your Exotic Indoor Paradise",
            desc: "Turn your home into a vibrant, tropical retreat filled with lush leaves and bright vibes.",
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
