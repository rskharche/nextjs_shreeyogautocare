"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fuel, Gauge, Calendar } from "lucide-react";

type Vehicle = {
    id: number;
    name: string;
    year: number;
    fuel: string;
    km: string;
    price: string;
    category: string;
    condition: string;
    image: string;
};

const vehicles: Vehicle[] = [
    {
        id: 1,
        name: "Hyundai Creta SX",
        year: 2022,
        fuel: "Petrol",
        km: "45,000 KM",
        price: "₹10.50 Lakh",
        category: "Cars",
        condition: "Used",
        image: "/vehicles/creta.jpg",
    },
    {
        id: 2,
        name: "Honda City VX",
        year: 2021,
        fuel: "Petrol",
        km: "38,000 KM",
        price: "₹8.75 Lakh",
        category: "Cars",
        condition: "Used",
        image: "/vehicles/honda-city.jpg",
    },
    {
        id: 3,
        name: "Royal Enfield Classic 350",
        year: 2023,
        fuel: "Petrol",
        km: "12,000 KM",
        price: "₹1.65 Lakh",
        category: "Bikes",
        condition: "Used",
        image: "/vehicles/classic-350.jpg",
    },
    {
        id: 4,
        name: "Tata Nexon",
        year: 2024,
        fuel: "Petrol",
        km: "8,500 KM",
        price: "₹9.80 Lakh",
        category: "Cars",
        condition: "New",
        image: "/vehicles/nexon.jpg",
    },
    {
        id: 5,
        name: "Honda Activa 6G",
        year: 2024,
        fuel: "Petrol",
        km: "5,200 KM",
        price: "₹82,000",
        category: "Bikes",
        condition: "New",
        image: "/vehicles/activa.jpg",
    },
    {
        id: 6,
        name: "Maruti Suzuki Brezza",
        year: 2022,
        fuel: "Petrol",
        km: "31,000 KM",
        price: "₹9.25 Lakh",
        category: "Cars",
        condition: "Used",
        image: "/vehicles/brezza.jpg",
    },
];

const categories = ["All", "Cars", "Bikes", "New", "Used"];

export default function FeaturedVehicles() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredVehicles =
        activeCategory === "All"
            ? vehicles
            : vehicles.filter(
                  (vehicle) =>
                      vehicle.category === activeCategory ||
                      vehicle.condition === activeCategory
              );

    return (
        <section className="bg-[#111111] py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* ================= HEADER ================= */}

                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                    <div>
                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
                            Our Collection
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                            FEATURED VEHICLES
                        </h2>

                        <p className="mt-3 max-w-xl text-gray-400">
                            Explore our carefully selected cars and bikes, ready for
                            their next journey.
                        </p>
                    </div>

                    {/* ================= CATEGORY TABS ================= */}

                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                    activeCategory === category
                                        ? "bg-amber-500 text-white shadow-lg"
                                        : "bg-white text-gray-600 hover:bg-amber-500 hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                </div>

                {/* ================= VEHICLE GRID ================= */}

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {filteredVehicles.slice(0, 6).map((vehicle) => (
                        <VehicleCard
                            key={vehicle.id}
                            vehicle={vehicle}
                        />
                    ))}

                </div>

                {/* ================= VIEW ALL ================= */}

                <div className="mt-12 flex justify-center">

                    <Link
                        href="/vehicles"
                        className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-amber-500"
                    >
                        VIEW ALL VEHICLES

                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                </div>

            </div>
        </section>
    );
}


/* =========================================================
   VEHICLE CARD
========================================================= */

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {

    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* ================= IMAGE ================= */}

            <div className="relative h-64 overflow-hidden bg-gray-200">

                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Condition Badge */}

                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-900 shadow">
                        {vehicle.condition}
                    </span>
                </div>

                {/* Price Badge */}

                <div className="absolute bottom-4 left-4">
                    <span className="rounded-lg bg-gray-900/90 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                        {vehicle.price}
                    </span>
                </div>

            </div>

            {/* ================= CONTENT ================= */}

            <div className="p-6">

                <div className="mb-4">

                    <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-amber-500">
                        {vehicle.name}
                    </h3>

                </div>

                {/* ================= VEHICLE INFORMATION ================= */}

                <div className="grid grid-cols-3 gap-3 border-y border-gray-100 py-4">

                    {/* Year */}

                    <div className="flex flex-col items-center gap-1 text-center">

                        <Calendar
                            size={17}
                            className="text-amber-500"
                        />

                        <span className="text-xs text-gray-400">
                            Year
                        </span>

                        <span className="text-sm font-semibold text-gray-800">
                            {vehicle.year}
                        </span>

                    </div>

                    {/* Fuel */}

                    <div className="flex flex-col items-center gap-1 border-x border-gray-100 text-center">

                        <Fuel
                            size={17}
                            className="text-amber-500"
                        />

                        <span className="text-xs text-gray-400">
                            Fuel
                        </span>

                        <span className="text-sm font-semibold text-gray-800">
                            {vehicle.fuel}
                        </span>

                    </div>

                    {/* KM */}

                    <div className="flex flex-col items-center gap-1 text-center">

                        <Gauge
                            size={17}
                            className="text-amber-500"
                        />

                        <span className="text-xs text-gray-400">
                            Driven
                        </span>

                        <span className="text-sm font-semibold text-gray-800">
                            {vehicle.km}
                        </span>

                    </div>

                </div>

                {/* ================= DETAILS BUTTON ================= */}

                <Link
                    href={`/vehicles/${vehicle.id}`}
                    className="group/button mt-5 flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-900 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                >

                    <span>
                        VIEW DETAILS
                    </span>

                    <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />

                </Link>

            </div>

        </div>
    );
}