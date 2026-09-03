"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const bannerImages = [
    {
        id: 1,
        image: "/Banner/banner_1.jpg",
        title: "SHREEYOG AUTOCARE",
        description: "Professional Bike and Car Sales & Repair Services",
    },
    {
        id: 2,
        image: "/Banner/banner_2.jpg",
        title: "Complete Auto Care",
        description: "Quality Auto Repair Services for Your Vehicle",
    },
    {
        id: 3,
        image: "/Banner/banner_3.jpg",
        title: "Trusted Service",
        description: "Your Bike, Our Responsibility",
    },
];

function Banner() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
    }


    return (
        <section className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
            <Image
                src={bannerImages[currentIndex].image}
                alt={bannerImages[currentIndex].title}
                fill
                priority
                className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div>
                    <h1 className="text-amber-400 text-4xl md:text-6xl font-bold">
                        {bannerImages[currentIndex].title}
                    </h1>

                    <p className="mt-4 text-lg md:text-2xl">
                        {bannerImages[currentIndex].description}
                    </p>
                    <p className="mt-4 text-sm md:text-sm">
                        Buy, Sell, Service, and Wash
                    </p>
                    <button className="mt-6 bg-amber-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
                        Explore Vehicles
                    </button>
                    <button className="mt-6 ml-4 bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black">
                        Book a Service
                    </button>
                </div>
            </div>

            {/* Previous button */}
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2
                   bg-black/50 text-white w-10 h-10 rounded-full
                   hover:bg-black/70"
            >
                ❮
            </button>

            {/* Next button */}
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2
                   bg-black/50 text-white w-10 h-10 rounded-full
                   hover:bg-black/70"
            >
                ❯
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {bannerImages.map((banner, index) => (
                    <button
                        key={banner.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Banner;