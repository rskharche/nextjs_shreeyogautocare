import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowUpRight,
} from "lucide-react";

function Footer() {
    return (
        <footer className="bg-[#111111] text-white">

            {/* ================= CTA SECTION ================= */}

            <div className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

                    <div className="flex flex-col gap-8 rounded-3xl bg-[#1c1c1c] p-8 md:flex-row md:items-center md:justify-between md:p-10">

                        <div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
                                ShreeYog AutoCare
                            </p>

                            <h2 className="text-2xl font-bold md:text-3xl">
                                Ready for your next journey?
                            </h2>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                                Buy, sell, service or care for your vehicle with
                                ShreeYogAutoCare.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">

                            <Link
                                href="/vehicles"
                                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-600"
                            >
                                Explore Vehicles
                                <ArrowUpRight size={17} />
                            </Link>

                            <Link
                                href="/service"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-amber-500 hover:text-amber-500"
                            >
                                Book Service
                            </Link>

                        </div>

                    </div>

                </div>
            </div>


            {/* ================= MAIN FOOTER ================= */}

            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* BRAND */}

                    <div className="lg:col-span-1">

                        <Link href="/" className="inline-block">

                            <div className="text-2xl font-black tracking-tight">
                                <span className="text-yellow-400">
                                    SHREE
                                </span>
                                <span className="text-white">
                                    YOG
                                </span>
                            </div>

                            <div className="mt-[-2px] text-sm font-bold tracking-[0.3em] text-gray-300">
                                AUTOCARE
                            </div>

                        </Link>

                        <p className="mt-6 text-sm leading-7 text-gray-400">
                            Your trusted destination for buying, selling, servicing
                            and caring for cars and bikes.
                        </p>


                        {/* Social Media */}

                        <div className="mt-6 flex gap-3">


                        </div>

                    </div>


                    {/* VEHICLES */}

                    <div>

                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                            Vehicles
                        </h3>

                        <ul className="mt-6 space-y-3">

                            <Link href="/vehicles/cars">
                                Cars
                            </Link>

                            <Link href="/vehicles/bikes">
                                Bikes
                            </Link>

                            <Link href="/vehicles/new">
                                New Vehicles
                            </Link>

                            <Link href="/vehicles/used">
                                Used Vehicles
                            </Link>

                            <Link href="/sell-your-vehicle">
                                Sell Your Vehicle
                            </Link>

                            <Link href="/exchange">
                                Vehicle Exchange
                            </Link>

                        </ul>

                    </div>


                    {/* SERVICES */}

                    <div>

                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                            Our Services
                        </h3>

                        <ul className="mt-6 space-y-3">

                            <Link href="/service">
                                Car Service
                            </Link>

                            <Link href="/service/bike">
                                Bike Service
                            </Link>

                            <Link href="/car-wash">
                                Car Wash
                            </Link>

                            <Link href="/detailing">
                                Car Detailing
                            </Link>

                            <Link href="/service/ac">
                                AC Service
                            </Link>

                            <Link href="/service/maintenance">
                                General Maintenance
                            </Link>

                        </ul>

                    </div>


                    {/* CONTACT */}

                    <div>

                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                            Contact Us
                        </h3>

                        <div className="mt-6 space-y-5">

                            {/* Location */}

                            <div className="flex gap-3">

                                <MapPin
                                    size={19}
                                    className="mt-1 shrink-0 text-amber-500"
                                />

                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Visit Us
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        <span className="text-yellow-400">
                                            SHREE
                                        </span>
                                        <span className="text-white">
                                            YOG
                                        </span> AutoCare
                                        <br />
                                        <span className="font-bold text-amber-500">Shop 1</span> :-  next to bharat petroleum, opposite to KGN DHABA, Ajivali, Vavoshi, Maharashtra 410203

                                    </p>
                                </div>

                            </div>


                            {/* Phone */}

                            <div className="flex gap-3">

                                <Phone
                                    size={18}
                                    className="mt-1 shrink-0 text-amber-500"
                                />

                                <div>

                                    <p className="text-sm font-semibold text-white">
                                        Call Us
                                    </p>

                                    <a
                                        href="tel:+910000000000"
                                        className="mt-1 block text-sm text-gray-400 transition hover:text-amber-500"
                                    >
                                       +91 755 858 2704
                                    </a>

                                </div>

                            </div>


                            {/* Email */}

                            <div className="flex gap-3">

                                <Mail
                                    size={18}
                                    className="mt-1 shrink-0 text-amber-500"
                                />

                                <div>

                                    <p className="text-sm font-semibold text-white">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:info@shreeyogautocare.com"
                                        className="mt-1 block text-sm text-gray-400 transition hover:text-amber-500"
                                    >
                                        info@shreeyogautocare.com
                                    </a>

                                </div>

                            </div>


                            {/* Timing */}

                            <div className="flex gap-3">

                                <Clock
                                    size={18}
                                    className="mt-1 shrink-0 text-amber-500"
                                />

                                <div>

                                    <p className="text-sm font-semibold text-white">
                                        Opening Hours
                                    </p>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Mon - Sun : 9:00 AM - 8:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM ================= */}

                <div className="mt-14 border-t border-white/10 pt-7">

                    <div className="flex flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">

                        <p className="text-gray-500">
                            © {new Date().getFullYear()} ShreeYogAutoCare. All rights reserved.
                        </p>


                        <div className="flex flex-wrap gap-6">

                            <Link
                                href="/privacy-policy"
                                className="text-gray-500 transition hover:text-white"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="text-gray-500 transition hover:text-white"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                href="/contact"
                                className="text-gray-500 transition hover:text-white"
                            >
                                Contact
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}


export default Footer