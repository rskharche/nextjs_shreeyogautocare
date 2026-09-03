import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Fuel, Gauge, Calendar } from "lucide-react";

const bikes = [
    {
        id: 1,
        name: "YEZDI ROADSTER (MH-46)",
        year: 2023,
        fuel: "Petrol",
        km: "2,700 KM",
        price: "₹2.10 Lakh",
        image: "/vehicle/vehicle1.jpeg",
    },
    {
        id: 2,
        name: "IMPERIALE 400",
        year: 2022,
        fuel: "Petrol",
        km: "29,500 KM",
        price: "₹1.85 Lakh",
        image: "/vehicle/vehicle2.jpeg",
    },
    {
        id: 3,
        name: "BAJAJ DOMINAR 400",
        year: 2017,
        fuel: "Petrol",
        km: "45,000 KM",
        price: "₹99,000 Thousand",
        image: "/vehicle/vehicle3.jpeg",
    },
];

const BASE_PATH =
    process.env.NODE_ENV === "production"
        ? "/nextjs_shreeyogautocare"
        : "";

export default function BikesPage() {
    return (
        <>
            <main className="min-h-screen bg-[#111111]">

                {/* ================= BIKE STOCK ================= */}

                <section className="bg-[#111111] py-16 md:py-20">

                    <div className="mx-auto max-w-7xl px-6 lg:px-8">

                        {/* Header */}

                        <div className="mb-10">

                            <Link
                                href="/"
                                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-amber-400 transition"
                            >
                                <ArrowLeft size={18} />
                                Back to Home
                            </Link>

                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
                                ShreeYog AutoCare
                            </p>

                            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
                                BIKE STOCK
                            </h1>

                            <p className="mt-3 max-w-2xl text-gray-400">
                                Explore our latest collection of new and pre-owned bikes.
                                Find the right bike at the right price.
                            </p>

                        </div>

                        {/* Bike Count */}

                        <div className="mb-6 flex items-center justify-between">

                            <p className="text-sm text-gray-400">
                                Showing{" "}
                                <span className="font-bold text-white">
                                    {bikes.length}
                                </span>{" "}
                                bikes
                            </p>

                        </div>

                        {/* ================= BIKE GRID ================= */}

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {bikes.map((bike) => (
                                <div
                                    key={bike.id}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    {/* Image */}

                                    <div className="relative h-64 overflow-hidden bg-gray-200">

                                        <Image
                                            src={`${BASE_PATH}${bike.image}`}
                                            alt={bike.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Used/New */}

                                        <div className="absolute left-4 top-4">
                                            <span className="rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold uppercase text-black shadow">
                                                Available
                                            </span>
                                        </div>

                                        {/* Price */}

                                        <div className="absolute bottom-4 left-4">
                                            <span className="rounded-lg bg-black/90 px-4 py-2 text-sm font-bold text-white">
                                                {bike.price}
                                            </span>
                                        </div>

                                    </div>

                                    {/* Content */}

                                    <div className="p-6">

                                        <h2 className="text-xl font-bold text-gray-900">
                                            {bike.name}
                                        </h2>

                                        {/* Information */}

                                        <div className="mt-5 grid grid-cols-3 border-y border-gray-100 py-4">

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
                                                    {bike.year}
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
                                                    {bike.fuel}
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
                                                    {bike.km}
                                                </span>

                                            </div>

                                        </div>

                                        {/* Details */}

                                        <Link
                                            href={`/vehicles/bikes/${bike.id}`}
                                            className="mt-5 flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-900 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                                        >
                                            <span>
                                                VIEW DETAILS
                                            </span>

                                            <span className="text-lg">
                                                →
                                            </span>

                                        </Link>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>


            </main>
          
        </>
    );
}