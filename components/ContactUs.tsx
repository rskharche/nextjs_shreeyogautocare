"use client";
import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowRight,
    MessageCircle,
    UserRound,
} from "lucide-react";

import {useForm} from "@formspree/react";

const founders = [
    {
        id: 1,
        name: "Askshay Anil Manave",
        designation: "Founder & Director",
        image: "/founders/founder1.PNG",
        phone: "+91 7387979512",
    },
    {
        id: 2,
        name: "Aniket Shivaji Patil",
        designation: "Founder & Director",
        image: "/founders/founder2.jpeg",
        phone: "+91 9595657674",
    },
];

const branches = [
    {
        id: 1,
        name: "ShreeYog AutoCare - Branch 1",
        address: "next to bharat petroleum, opposite to KGN DHABA, Ajivali, Vavoshi, Maharashtra 410203",
        phone: "+91 755 858 2704",
        timing: "Mon - Sun: 9:00 AM - 8:00 PM",
        mapUrl: "https://maps.app.goo.gl/1KVjRGsP171a755K9",
    },
    {
        id: 2,
        name: "ShreeYog AutoCare - Branch 2",
        address: "Shop No 1, Patil Nivas, near sharada magal karyalaya, Mahad, mahad, Khopoli, Maharashtra 410202",
        phone: "+91 755 858 2704",
        timing: "Mon - Sun: 9:00 AM - 8:00 PM",
        mapUrl: "https://maps.app.goo.gl/kTa48a9awz1BpXDv5",
    },
];

export default function ContactUs() {
        const [state, handleSubmit] = useForm("mrpgkjkq");

    if (state.succeeded) {
        return (
            <section className="bg-[#111111] py-20 text-white">
                <div className="mx-auto max-w-2xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-amber-400">
                        Thank You!
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Your enquiry has been received.
                        Our team will contact you shortly.
                    </p>
                </div>
            </section>
        );
    }
    
    return (
        <section className="bg-[#111111] text-white">

            {/* =====================================================
                CONTACT HEADER
            ===================================================== */}

            <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-8">

                <div className="max-w-3xl">

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
                        ShreeYog AutoCare
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                        CONTACT US
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-gray-400">
                        Looking to buy a vehicle, sell your vehicle, book a
                        service, or get your car washed? Our team is here to
                        help.
                    </p>

                </div>

            </div>


            {/* =====================================================
                CONTACT AREA
            ===================================================== */}

            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">


                    {/* =================================================
                        LEFT - CONTACT INFORMATION
                    ================================================= */}

                    <div>

                        <h3 className="text-2xl font-bold">
                            Let's Talk
                        </h3>

                        <p className="mt-3 text-gray-400">
                            Get in touch with ShreeYog AutoCare for vehicle
                            sales, service, washing and other automobile needs.
                        </p>


                        {/* Contact Details */}

                        <div className="mt-8 space-y-5">

                            {/* Phone */}

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-black">
                                    <Phone size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Call Us
                                    </p>

                                    <a
                                        href="tel:+917558582704"
                                        className="mt-1 block font-semibold hover:text-amber-400"
                                    >
                                        +91 755 858 2704
                                    </a>

                                </div>

                            </div>


                            {/* WhatsApp */}

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-black">
                                    <MessageCircle size={21} />
                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        WhatsApp
                                    </p>

                                    <a
                                        href="https://wa.me/917558582704"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block font-semibold hover:text-amber-400"
                                    >
                                        Chat With Us
                                    </a>

                                </div>

                            </div>


                            {/* Email */}

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-black">
                                    <Mail size={21} />
                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:info@shreeyogautocare.com"
                                        className="mt-1 block font-semibold hover:text-amber-400"
                                    >
                                       shreeyogautocare@gmail.com
                                    </a>

                                </div>

                            </div>


                            {/* Working Hours */}

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-black">
                                    <Clock size={21} />
                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Working Hours
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        Monday - Sunday
                                    </p>

                                    <p className="text-sm text-gray-400">
                                        9:00 AM - 8:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT - CONTACT FORM
                    ================================================= */}

                    <div className="rounded-2xl bg-white p-6 text-gray-900 shadow-2xl md:p-8">

                        <h3 className="text-2xl font-bold">
                            Send Us a Message
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Fill in your details and our team will contact you.
                        </p>


                        <form onSubmit={handleSubmit} className="space-y-5">

            <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3"
            />

            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3"
            />

            <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3"
            />

            <select
                name="interest"
                className="w-full rounded-lg border border-gray-200 px-4 py-3"
            >
                <option value="Buy a Car">Buy a Car</option>
                <option value="Buy a Bike">Buy a Bike</option>
                <option value="Sell Vehicle">Sell Vehicle</option>
                <option value="Vehicle Service">Vehicle Service</option>
                <option value="Car Wash">Car Wash</option>
                <option value="General Enquiry">
                    General Enquiry
                </option>
            </select>

            <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3"
            />

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-lg bg-amber-400 px-6 py-3.5 font-bold text-black hover:bg-amber-300 disabled:opacity-50"
            >
                {state.submitting
                    ? "SENDING..."
                    : "SEND MESSAGE"}
            </button>

            {state.errors && (
                <p className="text-sm text-red-500">
                    Something went wrong. Please try again.
                </p>
            )}

        </form>

                    </div>

                </div>

            </div>


            {/* =====================================================
                BRANCHES
            ===================================================== */}

            <div className="border-t border-white/10">

                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

                    <div className="text-center">

                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
                            Visit Us
                        </p>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            OUR LOCATIONS
                        </h2>

                    </div>


                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

                        {branches.map((branch) => (
                            <div
                                key={branch.id}
                                className="rounded-2xl border border-white/10 bg-[#181818] p-7 transition hover:border-amber-400/50"
                            >

                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-black">
                                        <MapPin size={22} />
                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold">
                                            {branch.name}
                                        </h3>

                                        <p className="mt-3 text-gray-400">
                                            {branch.address}
                                        </p>

                                        <p className="mt-2 text-sm text-gray-400">
                                            {branch.timing}
                                        </p>

                                        <p className="mt-2 font-semibold text-white">
                                            {branch.phone}
                                        </p>

                                    </div>

                                </div>


                                <a
                                    href={branch.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
                                >
                                    GET DIRECTIONS
                                    <ArrowRight size={17} />
                                </a>

                            </div>
                        ))}

                    </div>

                </div>

            </div>


            {/* =====================================================
                FOUNDERS
            ===================================================== */}

            <div className="border-t border-white/10 bg-[#0c0c0c]">

                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

                    <div className="text-center">

                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
                            The People Behind ShreeYog
                        </p>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            MEET OUR FOUNDERS
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                            Built with passion, trust and a commitment to
                            providing quality automobile services.
                        </p>

                    </div>


                    {/* Founder Cards */}

                    <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">

                        {founders.map((founder) => (
                            <div
                                key={founder.id}
                                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#181818] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50"
                            >

                                {/* Founder Image */}

                                <div className="relative h-[380px] overflow-hidden bg-gray-800">

                                    <Image
                                        src={
                                            process.env.NODE_ENV === "production"
                                                ? `/nextjs_shreeyogautocare${founder.image}`
                                                : founder.image
                                        }
                                        alt={founder.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />

                                </div>


                                {/* Founder Details */}

                                <div className="p-6 text-center">

                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-black">
                                        <UserRound size={21} />
                                    </div>

                                    <h3 className="mt-4 text-2xl font-bold">
                                        {founder.name}
                                    </h3>

                                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-amber-400">
                                        {founder.designation}
                                    </p>

                                    <a
                                        href={`tel:${founder.phone.replace(/\s/g, "")}`}
                                        className="mt-5 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                                    >
                                        <Phone size={16} />
                                        {founder.phone}
                                    </a>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}