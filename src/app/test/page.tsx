import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import HelpdeskSolution from "../../../public/images/helpdesksolution.png";
import websitesolution from "../../../public/images/websitesolution.jpg";
import colaboradorsolution from "../../../public/images/colaboradorsolution.jpg";
import fateletronicasolution from "../../../public/images/fateletronicasolution.jpg";
import contpublicasolution from "../../../public/images/contpublicasolution.jpg";
import contanaliticasolution from "../../../public/images/contanaliticasolution.jpg";

export default function FeaturesSectionDemo() {
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
      title: "Portal do Colaborador",
      description:
        "Assiduidade, marcação de férias, recibos...? Temos a solução.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
    },
    {
      title: "Faturação Eletrónica",
      description:
        "Envie e receba documentos de forma desmaterializada com os seus clientes e fornecedores.",
      skeleton: <SkeletonThree />,
      className: "border-b col-span-1 lg:col-span-2 lg:border-r  border-neutral-800",
    },
    {
      title: "Contabilidade Pública",
      description:
        "Autarquias Locais, Serviços Municipalizados, Empresas Municipais? A nossa solução adapta-se a qualquer empresa Pública ou de capitais Públicos.",
      skeleton: <SkeletonFour />,
      className: "border-b col-span-1 lg:col-span-2 lg:border-r  border-neutral-800",
    },
    {
      title: "Contabilidade Analítica",
      description:
        "Faturação dos custos para empresas do grupo? Pergunte-nos como…",
      skeleton: <SkeletonFive />,
      className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-12 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="font-bold text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight  text-white">
          Soluções
        </h4>

        <p className="text-2xl lg:text-4xl font-semibold max-w-2xl  my-4 mx-auto  text-center text-[#74c4cb]">
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
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug font-bold">
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
        "text-left max-w-sm mx-0 md:text-sm my-2 font-semibold"
      )}
    >
      {children}
    </p>
  );
};

const SkeletonOne = () => {
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



const SkeletonTwo = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-80">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src={colaboradorsolution}
            alt="header"
            width={800}
            height={600}
            className="h-full w-full aspect-square object-left-top rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-80">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src={fateletronicasolution}
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

const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <div className="w-full  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-80">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src={contpublicasolution}
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

const SkeletonFive = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-80">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src={contanaliticasolution}
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


