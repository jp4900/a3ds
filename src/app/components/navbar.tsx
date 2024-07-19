import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="z-[50] top-0 w-full border-white/[0.1] dark:border-white/[0.1]">
      <div className="px-10 md:px-24 flex h-20 items-center max-w-[88rem] mx-auto justify-between">
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
