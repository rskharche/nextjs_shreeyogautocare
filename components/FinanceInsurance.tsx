"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Car,
  Bike,
  Truck,
  Banknote,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const insuranceOptions = [
  {
    title: "Bike Insurance",
    description: "Comprehensive insurance plans for your bike.",
    icon: Bike,
    href: "/Contact",
  },
  {
    title: "Car Insurance",
    description: "Protect your car with the right insurance coverage.",
    icon: Car,
    href: "/Contact",
  },
  {
    title: "Commercial Vehicle",
    description: "Insurance solutions for commercial vehicles.",
    icon: Truck,
    href: "/Contact",
  },
];

const loanOptions = [
  {
    title: "New Bike Loan",
    description: "Easy financing options for your new bike.",
    icon: Bike,
    href: "/Contact",
  },
  {
    title: "Used Bike Loan",
    description: "Finance your pre-owned bike with flexible options.",
    icon: Bike,
    href: "/Contact",
  },
  {
    title: "New Car Loan",
    description: "Get financing support for your new car.",
    icon: Car,
    href: "/Contact",
  },
  {
    title: "Used Car Loan",
    description: "Affordable financing for pre-owned cars.",
    icon: Car,
    href: "/Contact",
  },
  {
    title: "Car Loan Top-Up",
    description: "Get additional funds against your existing car loan.",
    icon: Banknote,
    href: "/Contact",
  },
];

export default function FinanceInsurance() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            <ShieldCheck size={17} />
            Finance & Insurance
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Complete Vehicle Finance & Insurance
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            From buying your vehicle to protecting it on the road,
            ShreeYog AutoCare helps you with finance and insurance solutions.
          </p>
        </div>

        {/* Insurance */}
        <div className="mb-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
                Insurance
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                Vehicle Insurance
              </h3>
            </div>

            <Link
              href="/insurance"
              className="hidden items-center gap-1 text-sm font-semibold text-gray-900 transition hover:text-orange-500 sm:flex"
            >
              View All
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {insuranceOptions.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition group-hover:bg-orange-500">
                      <Icon
                        size={27}
                        className="text-gray-900 transition group-hover:text-white"
                      />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-orange-500"
                    />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-orange-500">
                    Get Insurance
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Loans */}
        <div>
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Finance
            </p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              Vehicle Loans
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {loanOptions.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative overflow-hidden rounded-2xl bg-gray-950 p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Background decoration */}
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 transition group-hover:bg-orange-500/20" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Icon size={24} className="text-orange-400" />
                    </div>

                    <h4 className="mt-5 text-lg font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-orange-400">
                      Apply Now
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-orange-500 p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Need help choosing the right option?
              </h3>

              <p className="mt-2 max-w-2xl text-sm text-orange-50">
                Talk to our team for vehicle insurance, new/used vehicle
                finance or car loan top-up assistance.
              </p>
            </div>

            <Link
              href="/Contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}