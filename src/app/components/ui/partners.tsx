import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";

interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
}

interface PartnersProps {
  partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!containerRef.current) return;

    const updateScrollWidth = () => {
      if (containerRef.current) {
        setScrollWidth(containerRef.current.scrollWidth / 2);
      }
    };

    updateScrollWidth();
    window.addEventListener("resize", updateScrollWidth);

    return () => window.removeEventListener("resize", updateScrollWidth);
  }, [partners]);

  useEffect(() => {
    if (scrollWidth === 0) return;

    const infiniteScroll = async () => {
      await controls.start({
        x: -scrollWidth,
        transition: {
          duration: 15,
          ease: "linear",
        },
      });
      controls.set({ x: 0 });
      infiniteScroll();
    };

    infiniteScroll();
  }, [scrollWidth, controls]);

  return (
    <section className="py-32 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl mb-20 px-4 md:text-5xl lg:text-6xl font-bold text-[#74c4cb] leading-relaxed text-center">
          Parcerias
        </h1>
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex py-2"
            animate={controls}
            style={{ width: `${scrollWidth * 2}px` }}
          >
            <div className="flex items-center justify-center h-full">
              {[...partners, ...partners].map((partner, index) => (
                <Link
                  href={partner.website}
                  key={`${partner.id}-${index}`}
                  passHref
                >
                  <motion.div
                    className="bg-white p-6 rounded-lg mx-6 flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-72 h-48">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                      />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
