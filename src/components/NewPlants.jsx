import React from "react";
import { Link } from "react-router";

const plants = [
    {
        id: 1,
        name: "Alphonso Mango",
        planted: "March 2020",
        description:
            "Known as the 'King of Mangoes', prized for its rich, creamy texture and sweet flavor.",
        category: "Tropical",
        care: "Moderate Care",
        image:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b56011c1-ddf5-4792-9227-4ef1496f00cb.png",
    },
    {
        id: 2,
        name: "Alphonso Mango",
        planted: "March 2020",
        description:
            "Known as the 'King of Mangoes', prized for its rich, creamy texture and sweet flavor.",
        category: "Tropical",
        care: "Moderate Care",
        image:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b56011c1-ddf5-4792-9227-4ef1496f00cb.png",
    },
    {
        id: 3,
        name: "Alphonso Mango",
        planted: "March 2020",
        description:
            "Known as the 'King of Mangoes', prized for its rich, creamy texture and sweet flavor.",
        category: "Tropical",
        care: "Moderate Care",
        image:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b56011c1-ddf5-4792-9227-4ef1496f00cb.png",
    },
];

export default function NewPlants() {
    return (
        <div>
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            New Plants section with at least 6 plant cards
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Discover the diverse range of mango plants you can grow and track
                            with our system
                        </p>
                    </div>

                    {/* Plant Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plants.map((plant) => (
                            <div
                                key={plant.id}
                                className="plant-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                                        {plant.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {plant.name}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Planted: {plant.planted}
                                    </p>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        {plant.description}
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                />
                                            </svg>
                                            {plant.care}
                                        </span>
                                        <Link to="/plant-details" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium transition">
                                            View Details →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="mt-12 text-center">
                        <div className="join">
                            <button className="join-item btn">1</button>
                            <button className="join-item btn btn-active">2</button>
                            <button className="join-item btn">3</button>
                            <button className="join-item btn">4</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
