"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutbanner from "../../public/images/about-banner.png";

import parceiro1 from "../../public/images/partners/Imagem1.png";
import parceiro2 from "../../public/images/partners/Imagem2.png";
import parceiro3 from "../../public/images/partners/Imagem3.png";
import parceiro4 from "../../public/images/partners/Imagem4.png";
import parceiro5 from "../../public/images/partners/Imagem5.png";
import parceiro6 from "../../public/images/partners/Imagem6.png";
import parceiro7 from "../../public/images/partners/Imagem7.png";
import parceiro8 from "../../public/images/partners/Imagem8.png";
import parceiro9 from "../../public/images/partners/Imagem9.png";
import parceiro10 from "../../public/images/partners/Imagem10.png";
import parceiro11 from "../../public/images/partners/Imagem11.png";
import gif from "../../public/images/gif/maingif.gif";

import Partners from "./components/ui/partners";
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
  IconChevronDown,
  IconDeviceDesktop,
  IconMoneybag,
  IconBrandHtml5,
  IconCalendar,
} from "@tabler/icons-react";

import { FlipWords } from "./components/ui/flip-words";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import { ParallaxScroll } from "./components/ui/parallax-scroll";

import Image, { StaticImageData } from "next/image";
import HandsShaking from "../../public/images/hands-shaking.png";
import ClientFocused from "../../public/images/client-focused.png";
import ContinuousLearning from "../../public/images/continuous-learning.png";
import CompromisedResults from "../../public/images/compromised-results.png";
import Speed from "../../public/images/speed.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import navhomescreen from "../../public/images/navhomescreen.jpg";
import navitems from "../../public/images/navitems.png";
import { FeaturesSectionDemo } from "./test/page";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import contabilidade from "../../public/images/modulosnav/contabilidade.jpg";
import inventario from "../../public/images/modulosnav/inventario.jpg";
import rh from "../../public/images/modulosnav/rh.jpg";
import comprasevendas from "../../public/images/modulosnav/comprasevendas.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

interface Servico {
  id: number;
  title: string;
  description: string;
  icon: any;
  image: StaticImageData;
}

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<Servico>(servicos[0]);
  return (
    <>
      <main>
        <Navbar />
        {/* Hero */}
        <div id="home">
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
              <span className="text-[#74c4cb]">A3</span> Dynamic Solutions
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
        <div className="min-h-screen" id="about">
          <h4 className="py-28 font-bold text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight  text-[#74c4cb]">
            Quem Somos
          </h4>
          <div className="flex flex-col md:flex-row py-10 px-4">
            <div className="md:w-1/2">
              <Image
                src={aboutbanner}
                alt="Confiança e Valores"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-2xl font-bold text-white dark:text-white mb-4">
                Experiência em gestão de ERP, consultas e soluções para clientes
                em todo o mundo.
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
                    experiência na implementação de projectos nos mais variados
                    ramos de atividade: Automóvel, Banca, Farmacêutica,
                    Logistíca, Produção, Retalho, Sector Público, Serviços, etc.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Conhecimento do ERP</AccordionTrigger>
                  <AccordionContent>
                    Conhecemos o ERP da Microsoft como ninguém… Fornecemos
                    soluções desde o ano 2000 nas versões Navision Financials,
                    Navision Attain, Microsoft Dynamics NAV e Microsoft Business
                    Central.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex md:flex-col md:items-start md:justify-center px-12 py-28 ">
            <div className="md:flex md:gap-4">
              <div className="flex items-center justify-center">
                <h1
                  className="text-2xl mb-4 px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white text-center min-h-16 max-h-16"
                  style={{ width: `${wordsforflip.join(" ").length * 10}px` }}
                >
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
        <div
          className="h-screen text-white p-8 bg-neutral-50"
          id="services"
        >
          <div className="py-20 mx-auto h-[calc(100vh-4rem)] flex flex-col">
            <h2 className="text-4xl font-bold mb-12 text-center md:text-5xl text-[#74c4cb]">
              Descubra os nossos serviços
            </h2>
            <div className="flex flex-1 gap-12 overflow-hidden">
              <SideMenu
                features={servicos}
                selectedFeature={selectedFeature}
                setSelectedFeature={setSelectedFeature}
              />
              <FeatureDisplay feature={selectedFeature} />
            </div>
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

        {/* Soluções */}
        <div id="solutions" className="bg-black p-10">
          <FeaturesSectionDemo />
        </div>
        {/* Parcerias */}
        <div className="bg-neutral-950 py-3 h-screen" id="parcerias">
          <Partners
            partners={partnersData.map((partner) => ({
              ...partner,
              logo: Object.values(partner.logo)[0] as string,
            }))}
          />
        </div>
      </main>

      <Footer />
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
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800 dark:border-neutral-800",
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

      <div
        className="text-lg font-bold mb-2 relative z-10 px-10 cursor-pointer"
        onClick={toggleCollapse}
      >
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 dark:bg-neutral-700 group-hover/feature:bg-blue-300 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 dark:text-neutral-100">
          {icon} {title}
        </span>
        <IconChevronDown
          className="ml-2 inline-block transition-transform duration-300"
          style={{ transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)" }}
          size={18}
        />{" "}
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isCollapsed ? "0" : "1000px" }}
      >
        <p className="text-sm text-neutral-300 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </div>
  );
};

const content = [
  {
    title: "Recursos Humanos",
    description:
      "A funcionalidade Recursos Humanos permite-lhe manter registos detalhados dos seus empregados. Pode registar e manter informações sobre os empregados, tais como contratos de trabalho, informações confidenciais, qualificações e dados de contacto dos empregados. Também pode utilizar os Recursos Humanos para registar as ausências dos empregados, permitindo-lhe analisar as ausências registadas, se necessário. Para começar a utilizar os Recursos Humanos, é necessário definir os empregados e outras informações básicas. Pode também associar diferentes códigos a um empregado, o que lhe permite filtrar informações e visualizar empregados específicos.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={rh}
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
      "Com o Business Central, tem a garantia de que as suas tarefas financeiras e contabilísticas serão executadas com a menor margem de erro possível, mas ao mesmo tempo de forma eficaz e transparente. O Business Central torna fácil e eficiente o tratamento das seguintes áreas da contabilidade: Movimentos, Dívida, Contas a receber, Extrato, Contas analíticas, Activos fixos, Fluxo de caixa. O sistema ERP permite-lhe ainda gerir processos financeiros entre empresas, geografias ou moedas. Através da informação financeira, o Business Central permite-lhe ainda detetar tendências relacionadas com o sector e obter informações sobre as actividades relacionadas com o seu negócio. Conhecimento que pode utilizar para planear estratégias futuras e identificar novas oportunidades.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={contabilidade}
          width={450}
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
      "Otimizar e simplificar as operações de compra e venda da sua empresa nunca foi tão fácil. Com ele, você terá um controle total sobre todo o ciclo de vida dos seus negócios, desde a solicitação de uma compra até a emissão da fatura final para o cliente. Imagine ter todas as informações sobre os seus fornecedores, produtos, clientes e vendas centralizadas em um único sistema, facilitando a tomada de decisões e aumentando a eficiência dos seus processos.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={comprasevendas}
          width={450}
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
      "O Business Central é a sua solução completa para uma gestão de inventário eficiente e precisa. Com ele, você terá total controle sobre os seus produtos, desde a entrada no stock até a saída para venda. Imagine ter uma visão clara dos seus níveis de stock em tempo real, saber exatamente quais produtos estão prestes a acabar e automatizar processos como a reposição de produtos.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={inventario}
          width={450}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const partnersData = [
  {
    id: 1,
    name: "Winning",
    logo: { parceiro1 },
    website: "https://winning-consulting.com/",
  },
  {
    id: 2,
    name: "SmartStep",
    logo: { parceiro2 },
    website: "https://www.smartstep.pt/",
  },
  {
    id: 3,
    name: "EverEdge",
    logo: { parceiro3 },
    website: "https://www.everedge.pt/",
  },
  { id: 4, name: "Dweb", logo: { parceiro4 }, website: "https://www.dweb.pt/" },
  {
    id: 5,
    name: "CpcIt4All",
    logo: { parceiro5 },
    website: "https://www.cpcit4all.pt/",
  },
  {
    id: 6,
    name: "ATC Portugal",
    logo: { parceiro6 },
    website: "https://atcportugal.com/",
  },
  {
    id: 7,
    name: "WayWard",
    logo: { parceiro7 },
    website: "https://waywardcomputers.com/",
  },
  {
    id: 8,
    name: "EuPago",
    logo: { parceiro8 },
    website: "https://www.eupago.pt/",
  },
  {
    id: 9,
    name: "Helmo",
    logo: { parceiro9 },
    website: "https://www.helmo.pt/",
  },
  {
    id: 10,
    name: "PSDesign",
    logo: { parceiro10 },
    website: "http://www.surpriseland.pt/",
  },
  {
    id: 11,
    name: "Assismatica",
    logo: { parceiro11 },
    website: "https://www.assismatica.pt/",
  },
  // Add more partners as needed
];

interface SideMenuProps {
  features: Servico[];
  selectedFeature: Servico;
  setSelectedFeature: (feature: Servico) => void;
}

function SideMenu({
  features,
  selectedFeature,
  setSelectedFeature,
}: SideMenuProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center w-1/3">
      <div className="space-y-1">
        {features.map((feature) => (
          <button
            key={feature.id}
            className={`w-full p-4 rounded-lg transition-all duration-300 flex items-center gap-3
              ${
                selectedFeature.id === feature.id
                  ? "bg-neutral-200 text-black"
                  : " text-neutral-600 bg-white hover:bg-neutral-200 hover:text-black"
              }`}
            onClick={() => setSelectedFeature(feature)}
          >
            <span className="text-2xl">{feature.icon}</span>
            <span className="font-semibold">{feature.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

interface FeatureDisplayProps {
  feature: Servico;
}

function FeatureDisplay({ feature }: FeatureDisplayProps): JSX.Element {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={feature.id}
        className="flex-1 bg-white rounded-2xl overflow-hidden flex h-full p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex-1 pr-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex flex-col items-start justify-center h-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {feature.title}
            </h3>
            <p className=" text-gray-700">{feature.description}</p>
          </div>
        </motion.div>
        <motion.div
          className="w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const servicos: Servico[] = [
  {
    id: 1,
    title: "Consultoria Informática",
    description:
      "Conte com a nossa experiência para atualizar a sua empresa com a mais moderna tecnologia.",
    icon: <IconDeviceDesktop />,
    image: parceiro1,
  },
  {
    id: 2,
    title: "Consultoria Financeira",
    description:
      "Os nossos consultores vão fornecer-lhe os conselhos necessários para elevar o seu negócio a um novo patamar.",
    icon: <IconReportMoney />,
    image: parceiro2,
  },
  {
    id: 3,
    title: "Contabilidade",
    description:
      "A entrega do IVA e de outros impostos e as declarações anuais são um problema? Registamos no seu software!",
    icon: <IconCurrencyEuro />,
    image: parceiro3,
  },
  {
    id: 4,
    title: "ERP Business Central",
    description:
      "O Microsoft Dynamics NAV chama-se agora Dynamics 365 Business Central! Obtenha as mesmas funcionalidades avançadas do Dynamics NAV, com total flexibilidade para implementar na cloud ou localmente com o Business Central.",
    icon: <IconBrandPowershell />,
    image: parceiro4,
  },
  {
    id: 5,
    title: "CRM Microsoft Dynamics 365",
    description:
      "Combine Vendar, Gestão de Clientes, Serviços, Projetos e Marketing no mesmo software e obtenha o máximo rendimento da sua equipa.",
    icon: <IconCalendar />,
    image: parceiro5,
  },

  {
    id: 6,
    title: "Web Development",
    description:
      "Um novo site para rejuvenescer o seu negócio, um portal interno ou uma loja on-line?",
    icon: <IconBrandHtml5 />,
    image: parceiro4,
  },
];
