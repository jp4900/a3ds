import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import HelpdeskSolution from "../../../public/images/helpdesksolution.png";
import contabilidadeSolution from "../../../public/images/contabilidadesolution.jpg";
import interfacesolution from "../../../public/images/interfacesolution.jpg";
import websitesolution from "../../../public/images/websitesolution.jpg";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Portal de Tickets 24/7",
      description:
        "Conecte-se connosco e esclareça as suas duvidas em tempo real.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
    },
    {
      title: "Interfaces com outros sistemas",
      description:
        "Conecte o seu Business Central com o seu software de produção, pesagem, etc.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
    },
    {
      title: "Contabilidade",
      description:
        "Conte com o Business Central e os nossos técnicos para o ajudar em tudo.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r  border-neutral-800",
    },
    {
      title: "Desenvolvimento Web",
      description:
        "Conte connosco um novo site para rejuvenescer o seu negócio, um portal interno ou uma loja on-line.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="font-bold text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight  text-white">
          Soluções
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto  text-center font-normal text-neutral-300">
          Você idealiza, nós realizamos!
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        " text-center font-normal text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <Link
      href="https://a3ds.pt/helpdesk"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent group h-96">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          <Image
            src={HelpdeskSolution}
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-sm transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-80">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src={contabilidadeSolution}
            alt="header"
            width={800}
            height={600}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-80">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src={interfacesolution}
            alt="header"
            width={800}
            height={600}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <div className="w-full  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-80">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src={websitesolution}
            alt="header"
            width={800}
            height={600}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};
