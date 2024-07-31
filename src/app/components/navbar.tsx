import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/images/logo/logo.png';
import { useEffect, useState, useRef } from 'react';

const Navbar = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const [isHome, setIsHome] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);


  // IntersectionObserver configuration
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3, // Adjust to determine when a section is considered "active" (e.g., partially visible)
  };

  // Handle section visibility changes
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      } else if (activeSection === entry.target.id) { // Handle transitioning out of a section
        setActiveSection(null); // Reset if leaving the section
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.getElementById('navbar')!.offsetHeight;
      const viewHeight = window.innerHeight;

      setIsFixed(scrollPosition > viewHeight - navbarHeight);

      if (homeRef.current) {
        const homeTop = homeRef.current.offsetTop;
        setIsHome(scrollPosition <= homeTop + 100); // Adjust the threshold as needed
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check for "Home" section
    handleScroll(); // Call on mount to check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Select all sections with the matching IDs
    sectionsRef.current = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('services'),
      document.getElementById('nav'),
      document.getElementById('solutions'),
      document.getElementById('parcerias'),
    ];

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section); // Observe each section
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section); // Unobserve sections on cleanup
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="navbar"
      className={`z-50 w-full bg-[rgba(15,15,15)] bg-opacity-80 bg-clip-padding blur-backdrop-filter border-white/[0.1] dark:border-white/[0.1] transition-all duration-300 ${
        isFixed ? 'sticky top-0' : 'absolute bottom-0'
      }`}
    >
      <div className="px-4 md:px-10 lg:px-24 flex h-16 items-center max-w-[88rem] mx-auto justify-between">
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
        <div className="hidden md:flex items-center space-x-6">
          {/* Desktop navigation */}
          <Link href="/#home">
            <h1
              className={`font-semibold text-lg ${
                activeSection === 'home' ? 'text-blue-300 ' : 'text-white hover:text-blue-300'
              }`}
            >
              Home
            </h1>
          </Link>
          <Link href="/#about">
            <h1
              className={`font-semibold text-lg ${
                activeSection === 'about' ? 'text-blue-300 ' : 'text-white hover:text-blue-300'
              }`}
            >
              Quem Somos
            </h1>
          </Link>
          <Link href="/#services">
            <h1
              className={`font-semibold text-lg ${
                activeSection === 'services' ? 'text-blue-300 ' : 'text-white hover:text-blue-300'
              }`}
            >
              Serviços
            </h1>
          </Link>
          <Link href="/#nav">
            <h1
              className={`font-semibold text-lg ${
                activeSection === 'nav' ? 'text-blue-300 ' : 'text-white hover:text-blue-300'
              }`}
            >
              Business Central
            </h1>
          </Link>
          <Link href="/#solutions">
            <h1
              className={`font-semibold text-lg ${
                activeSection === 'solutions' ? 'text-blue-300 ' : 'text-white hover:text-blue-300'
              }`}
            >
              Soluções
            </h1>
          </Link>
          <Link href="/#parcerias">
            <h1
              className={`font-semibold text-lg ${
                activeSection === 'parcerias' ? 'text-blue-300 ' : 'text-white hover:text-blue-300'
              }`}
            >
              Parcerias
            </h1>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Hamburger menu icon */}
          </button>
        </div>
        <Link href="/contact">
          <button className="inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contacte-nos
          </button>
        </Link>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            {/* Mobile navigation */}
            <Link
              href="/#about"
              className={`block text-center py-2 ${
                activeSection === 'about' ? 'font-bold text-blue-300' : ''
              }`}
            >
              Quem Somos
            </Link>
            <Link
              href="/#services"
              className={`block text-center py-2 ${
                activeSection === 'services' ? 'font-bold text-blue-300' : ''
              }`}
            >
              Serviços
            </Link>
            <Link
              href="/#nav"
              className={`block text-center py-2 ${
                activeSection === 'nav' ? 'font-bold text-blue-300' : ''
              }`}
            >
              Business Central
            </Link>
            <Link
              href="/#solutions"
              className={`block text-center py-2 ${
                activeSection === 'solutions' ? 'font-bold text-blue-300' : ''
              }`}
            >
              Soluções
            </Link>
            <Link
              href="/#parcerias"
              className={`block text-center py-2 ${
                activeSection === 'parcerias' ? 'font-bold text-blue-300' : ''
              }`}
            >
              Parcerias
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
