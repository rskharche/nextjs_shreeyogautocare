import type { Metadata } from "next";
import { Oswald } from "next/font/google";


import "./globals.css";
import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHREEYOG AUTOCARE",
  description: "Welcome to SHREEYOG AUTOCARE",
  authors: [{ name: "Rushikesh kharche" }],
  keywords: ["SHREEYOG AUTOCARE", "Auto Repair", "Car Service"
    , "Vehicle Maintenance", "Bike Selling", "Second Hand Bike", "Car Repair", "Car Maintenance"],
  icons: {
    icon: "/SYALogo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">

      <body className={`${oswald.className} min-h-full flex flex-col`}>{/* Apply the Oswald font class */}
        <Navigation />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
