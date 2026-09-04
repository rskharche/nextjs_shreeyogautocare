import Image from "next/image";
import Link from "next/link";

const BASE_PATH =
    process.env.NODE_ENV === "production"
        ? "/nextjs_shreeyogautocare"
        : "";

function Navigation() {
    return (
        <header className="bg-[#111111] text-white p-4 items-center grid grid-cols-2">
            <div>
                <Image
                    src={
                        process.env.NODE_ENV === "production"
                            ? "/nextjs_shreeyogautocare/SYALogo.png"
                            : "/SYALogo.png"
                    }
                    alt="Logo"
                    width={70}
                    height={40}
                    className="h-12 w-auto object-contain"
                />
            </div>
            <nav>
                <ul className="flex text-sm md:text-base lg:text-lg gap-2 md:gap-2.5 lg:gap-4 justify-end caret-amber-300">
                   <li>
                        <Link className="hover:text-amber-300" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-amber-300" href="/components/Featuredvehicles">Buy</Link>
                    </li>
                    <li>
                        <Link className="hover:text-amber-300" href="/Contact">Sell</Link>
                    </li>
                    <li>
                        <Link className="hover:text-amber-300" href="/Contact">Service</Link>
                    </li>
                    <li>
                        <Link className="hover:text-amber-300" href="/Contact">Wash</Link>
                    </li>
                    <li>
                        <Link className="hover:text-amber-300" href="/Contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation