"use client";

import { motion } from "framer-motion";
import aboutbanner from "../../public/images/about-banner.png";

import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import {
  IconHeartHandshake,
  IconViewfinder,
  IconBrain,
  IconReportAnalytics,
  IconPresentation,
  IconWorldWww,
  IconTool,
  IconDatabase,
  IconPlugConnected,
  IconBrandPowershell,
  IconChartHistogram,
  IconCurrencyEuro,
  IconReportMoney,
} from "@tabler/icons-react";

import { FlipWords } from "./components/ui/flip-words";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";

import Image, { StaticImageData } from "next/image";
import HandsShaking from "../../public/images/hands-shaking.png";
import ClientFocused from "../../public/images/client-focused.png";
import ContinuousLearning from "../../public/images/continuous-learning.png";
import CompromisedResults from "../../public/images/compromised-results.png";
import Speed from "../../public/images/speed.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import navhomescreen from "../../public/images/navhomescreen.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero */}
        <div>
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              <span className="text-blue-300">A3</span> Dynamic Solutions
            </motion.h1>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-xl px-4 md:text-3xl lg:text-4xl font-bold text-center text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto "
            >
              <Highlight className="text-white dark:text-white">
                Step up your business
              </Highlight>
            </motion.h1>
          </HeroHighlight>
        </div>

        {/* Confiança e Valores */}
        <div id="about">
          <div className="flex md:flex-col md:items-start md:justify-center py-28 px-20">
            <div className="md:flex md:gap-4">
              <div className="flex items-center justify-center">
                <Image
                  src={aboutbanner}
                  alt="Confiança e Valores"
                  className="md:max-w-[45vw] md:max-h-[75vh]"
                />
              </div>
              <div className="md:box-border">
                <h1 className="text-2xl px-4 md:text-3xl lg:text-4xl font-bold text-white dark:text-white min-h-16 max-h-16 mb-36 md:mb-20">
                  Experiência em gestão de ERP, consultas e soluções para
                  clientes em todo o mundo.
                </h1>
                <Accordion type="single" collapsible className="px-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>A empresa</AccordionTrigger>
                    <AccordionContent>
                      A A3 Dynamics Solutions é uma empresa de consultoria de
                      sitemas de informação, assente em tecnologias Microsoft.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>A Nossa Equipa</AccordionTrigger>
                    <AccordionContent>
                      A nossa equipa é composta por consultores com uma vasta
                      experiência na implementação de projectos nos mais
                      variados ramos de atividade: Automóvel, Banca,
                      Farmacêutica, Logistíca, Produção, Retalho, Sector
                      Público, Serviços, etc.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Conhecimento do ERP</AccordionTrigger>
                    <AccordionContent>
                      Conhecemos o ERP da Microsoft como ninguém… Fornecemos
                      soluções desde o ano 2000 nas versões Navision Financials,
                      Navision Attain, Microsoft Dynamics NAV e Microsoft
                      Business Central.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col md:items-start md:justify-center px-12 py-28">
            <div className="md:flex md:gap-4">
              <div className="flex items-center justify-center">
                <h1 className="text-2xl mb-4 px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white text-center min-h-16 max-h-16">
                  Baseados em <FlipWords words={wordsforflip} />
                </h1>
              </div>
              <BentoGrid className="md:max-w-[60vw]">
                {items.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 ? "md:col-span-2" : ""}
                  />
                ))}
              </BentoGrid>
            </div>
          </div>
        </div>

        {/* Serviços */}
        <div className=" bg-neutral-950 py-28" id="services">
          <h1 className="text-2xl mb-4 px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white leading-relaxed text-center">
            Serviços
          </h1>
          <p className="text-sm mb-4 px-4 md:text-lg lg:text-xl font-bold text-neutral-300 dark:text-neutral-300 leading-relaxed text-center">
            A A3DS leva-o ao mais alto nível, desde contabilidade a Web Design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-14 px-12 min-w-full mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>

        {/* NAV */}
        <div className="bg-neutral-50" id="nav">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="relative text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-800  text-center font-sans font-bold">
                  Eleve a sua empresa com o <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Business Central
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={navhomescreen}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
          <StickyScroll content={content} />
        </div>
      </main>
    </>
  );
}

const Skeleton = ({ imageSrc }: { imageSrc: StaticImageData }) => (
  <div className="flex h-full w-full rounded-xl overflow-hidden">
    <Image
      className="h-full w-full object-cover"
      src={imageSrc}
      width={200}
      height={200}
      alt="Skeleton"
    />
  </div>
);
const items = [
  {
    title: "Transparência e Confiança",
    description:
      "Abertura gera confiança. Compartilhamos informações com clareza e honestidade.",
    header: <Skeleton imageSrc={HandsShaking} />,
    icon: <IconHeartHandshake className="h-4 w-4 text-blue-300" />,
  },
  {
    title: "Foco no Cliente",
    description:
      "A sua satisfação é o nosso foco. Priorizamos as suas necessidades e superamos as expectativas.",
    header: <Skeleton imageSrc={ClientFocused} />,
    icon: <IconViewfinder className="h-4 w-4 text-blue-300" />,
  },
  {
    title: "Aprendizagem contínua",
    description:
      "Nunca paramos de aprender. Melhoramos continuamente para poder fornecer o melhor trabalho possível.",
    header: <Skeleton imageSrc={ContinuousLearning} />,
    icon: <IconBrain className="h-4 w-4 text-blue-300" />,
  },
  {
    title: "Resultados Comprometidos",
    description:
      "Entregamos valor. O nosso sucesso é medido com base no sucesso dos nossos clientes.",
    header: <Skeleton imageSrc={CompromisedResults} />,
    icon: <IconReportAnalytics className="h-4 w-4 text-blue-300" />,
  },
  {
    title: "Velocidade implacável",
    description:
      "Rápidos e eficientes. Entregamos a melhor qualidade no menor tempo possível.",
    header: <Skeleton imageSrc={Speed} />,
    icon: <IconPresentation className="h-4 w-4 text-blue-300" />,
  },
];

const wordsforflip = [
  "rapidez",
  "qualidade",
  "confiança",
  "transparência",
  "compromisso",
  "eficiência",
];

const features = [
  {
    title: "Consultoria Informática",
    description: "Connosco, a sua empresa vai alcançar o auge da tecnologia.",
    icon: <IconBrandPowershell />,
  },
  {
    title: "Consultoria Financeira ",
    description:
      "Conte connosco para tomar decisões financeiras inteligentes e lucrativas.",
    icon: <IconReportMoney />,
  },
  {
    title: "Contabilidade",
    description:
      "Contabilidade e uma carga de trabalhos? Connosco não tem de ser.",
    icon: <IconCurrencyEuro />,
  },
  {
    title: "Dynamics NAV",
    description:
      "O Dynamics NAV torna o seu negócio mais eficiente, eficaz e lucrativo.",
    icon: <IconChartHistogram />,
  },
  {
    title: "Web Design ",
    description: "Websites modernos que transformam visitantes em clientes.",
    icon: <IconWorldWww />,
  },
  {
    title: "Hardware",
    description: "Falta de equipamentos? Não é problema. Nós ajudamos.",
    icon: <IconTool />,
  },
  {
    title: "Administração de dados",
    description:
      "Fornecemos serviços de bases de dados robustas e de alto desemrepnho.",
    icon: <IconDatabase />,
  },
  {
    title: "Redes",
    description:
      "Nós conectamos a sua empresa de forma segura e preparada para o futuro.",
    icon: <IconPlugConnected />,
  },
];
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800 dark:border-neutral-800",
        (index === 0 || index === 4) &&
          "lg:border-l border-neutral-800 dark:border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800 dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 dark:bg-neutral-700 group-hover/feature:bg-blue-300 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const content = [
  {
    title: "Recursos Humanos",
    description:
      "O NAV garante a gestão eficiente e eficaz do seu capital humano. Automatize tarefas repetitivas, centralize os seus dados de RH, melhore a sua tomada de decisoes, aumente a produtividade e muito mais.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={navhomescreen}
          width={450}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Contabilidade",
    description:
      "O BC é um software de contabilidade completo que oferece tudo para gerir as suas finanças com precisão e eficiência. Automatize tarefas, obtenha relatórios abrangentes, garanta conformidade fiscal, melhore o fluxo de capital e muito mais.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Compras e vendas",
    description:
      "O NAV otimiza os processos de compra e venda. Automatize tarefas, tenha visibilidade completa da cadeia de , gerencie relacionamentos com fornecedores e clientes, aumente a lucratividade e muito mais.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Inventário",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
