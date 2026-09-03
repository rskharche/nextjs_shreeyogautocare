import { Car, Bike, Wrench, Droplets, ArrowRight } from "lucide-react";
import Link from "next/link";

const options = [
  {
    title: "BUY A CAR",
    description: "Find your perfect car",
    icon: Car,
    href: "/vehicles/cars",
    button: "View Stock",
  },
  {
    title: "BUY A BIKE",
    description: "Explore our bike collection",
    icon: Bike,
    href: "/vehicles/bikes",
    button: "View Stock",
  },
  {
    title: "SERVICE",
    description: "Professional vehicle care",
    icon: Wrench,
    href: "/service",
    button: "Book Now",
  },
  {
    title: "CAR WASH",
    description: "Premium cleaning & detailing",
    icon: Droplets,
    href: "/car-wash",
    button: "Book Wash",
  },
];   

function Quickaction() {
  return (
    <section className="bg-[#111111] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            <span className="text-yellow-400">
                  SHREE
                </span>
                <span className="text-white">
                  YOG
                </span> AutoCare
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            WHAT ARE YOU LOOKING FOR?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Everything you need for your car or bike, all in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {options.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
              >
                {/* Background decoration */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-50 transition-transform duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900 text-white transition-colors duration-300 group-hover:bg-amber-500">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>

                  {/* Button */}
                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-amber-500">
                    {item.button}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  )
}

export default Quickaction