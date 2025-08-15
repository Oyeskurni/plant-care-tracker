// Services.jsx
import React from "react";
import { FaLeaf, FaWater, FaSun } from "react-icons/fa";

const services = [
    {
        title: "Plant Consultation",
        description: "Get expert advice on how to care for your plants and keep them healthy.",
        icon: <FaLeaf className="text-emerald-500 w-10 h-10" />,
    },
    {
        title: "Watering Schedule",
        description: "We provide personalized watering schedules to keep your plants thriving.",
        icon: <FaWater className="text-emerald-500 w-10 h-10" />,
    },
    {
        title: "Sunlight Guidance",
        description: "Learn the perfect lighting conditions for each of your plants.",
        icon: <FaSun className="text-emerald-500 w-10 h-10" />,
    },
];

const Services = () => {
    return (
        <div className="min-h-screen bg-green-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-emerald-600 mb-12">
                    Our Services
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
