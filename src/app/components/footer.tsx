import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo/logo.png";

const Footer = () => {
  return (
    <footer className="z-[50] bottom-0 w-full border-white/[0.1] dark:border-white/[0.1]">
      <div
        className="grid grid-cols-1 md:flex md:justify-around gap-10
      text-center pt-2 px-10 md:px-24 h-32 max-w-[88rem] mx-auto"
      >
        <div className="flex items-center space-x-3">
          <p className="text-sm text-neutral-600">
            © A3DS {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/contact"
            className="text-sm text-neutral-600 hover:text-neutral-500"
          >
            Contacte-nos
          </Link>
          <div className="w-px h-5 bg-neutral-700"></div>
          <Link
            href="/terms"
            className="text-sm text-neutral-600 hover:text-neutral-500"
          >
            Termos e Serviços
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
