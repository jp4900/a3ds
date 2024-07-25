"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.getElementById("navbar")!.offsetHeight;
      const viewHeight = window.innerHeight;

      if (scrollPosition > viewHeight - navbarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`z-50 w-full bg-[rgba(15,15,15)] bg-opacity-80 bg-clip-padding blur-backdrop-filter border-white/[0.1] dark:border-white/[0.1] transition-all duration-300 ${
        isFixed ? "sticky top-0" : "absolute bottom-0"
      }`}
    >
      <div className="px-10 md:px-24 flex h-16 items-center max-w-[88rem] mx-auto justify-between">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="font-bold text-xl md:text-2xl">A3DS</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="#about">
            <h1 className="font-semibold text-lg text-white hover:text-blue-300">
              Quem Somos
            </h1>
          </Link>
          <Link href="#services">
            <h1 className="font-semibold text-lg text-white hover:text-blue-300">
              Serviços
            </h1>
          </Link>
          <Link href="#nav">
            <h1 className="font-semibold text-lg text-white hover:text-blue-300">
              Business Central
            </h1>
          </Link>
          <Link href="/services">
            <h1 className="font-semibold text-lg text-white hover:text-blue-300">
              Soluções
            </h1>
          </Link>
          <Link href="#parcerias">
            <h1 className="font-semibold text-lg text-white hover:text-blue-300">
              Parcerias
            </h1>
          </Link>
        </div>
        <Link href="/contact">
          <button className="inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contacte-nos
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
