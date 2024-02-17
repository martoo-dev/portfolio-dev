import Angular from "@components/logos/angular.astro";
import Astro from "@components/logos/astroo.astro";
import React from "@components/logos/react.astro";
import NodeJS from "@components/logos/nodejs.astro";
import Tailwind from "@components/logos/tailwind.astro";
import Bootstrap from "@components/logos/bootstrap.astro";
import Spring from "@components/logos/spring.astro";
import MySQL from "@components/logos/mysql.astro";
import HTML from "@components/logos/html.astro";
import CSS from "@components/logos/css.astro";
import JS from "@components/logos/javascript.astro";
import PHP from "@components/logos/php.astro";
import Stripe from "@components/logos/stripe.astro";

import fairway from "@public/projects/fairway.webp";
import fairway1 from "@public/projects/fairway1.webp";
import fairway2 from "@public/projects/fairway2.webp";
import fairway3 from "@public/projects/fairway3.webp";
import fairway4 from "@public/projects/fairway4.webp";
import fairway5 from "@public/projects/fairway5.webp";
import sinergy from "@public/projects/sinergy.webp";
import portfolioargprog from "@public/projects/portfolioargprog.webp";
import imcalculator from "@public/projects/imcalculator.webp";
import summonerspedia from "@public/projects/summonerspedia.webp";

const TAGS = {
  ANGULAR: {
    name: "Angular",
    color: "pink",
    icon: Angular,
  },
  ASTRO: {
    name: "Astro",
    color: "gray",
    icon: Astro,
  },
  REACT: {
    name: "React",
    color: "cyan",
    icon: React,
  },
  NODE: {
    name: "Node.Js",
    color: "green",
    icon: NodeJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    color: "sky",
    icon: Tailwind,
  },
  BOOTSTRAP: {
    name: "Boostrap",
    color: "purple",
    icon: Bootstrap,
  },
  SPRING: {
    name: "Spring Boot",
    color: "lime",
    icon: Spring,
  },
  MYSQL: {
    name: "MySQL",
    color: "teal",
    icon: MySQL,
  },
  HTML: {
    name: "HTML",
    color: "orange",
    icon: HTML,
  },
  CSS: {
    name: "CSS",
    color: "blue",
    icon: CSS,
  },
  JS: {
    name: "JavaScript",
    color: "yellow",
    icon: JS,
  },
  PHP: {
    name: "PHP",
    color: "gray",
    icon: PHP,
  },
  STRIPE: {
    name: "Stripe",
    color: "violet",
    icon: Stripe,
  },
};

export const PROJECTS = [
  {
    id: "fairway",
    images: [
      fairway.src,
      fairway1.src,
      fairway2.src,
      fairway3.src,
      fairway4.src,
      fairway5.src,
    ],
    title: "Fairway - Indoor Golf",
    description:
      "Libera tu pro interior con los mejores cursos de golf. La principal experiencia de golf interior de Portage, Indiana, cuyo lugar es la combinación perfecta de golf y restaurante, con cuatro bahías de última generación para demostrar tus habilidades y un bar completo para que disfrutes de los cócteles más deliciosos. Llueva o haga sol, de día o de noche, ¡juegue a su antojo en Fairway Indoor Golf!",
    info: "Trabajo pagado. Incluye un sistema de reservas integrando una API externa de pagos con tarjetas.",
    tags: [TAGS.REACT, TAGS.NODE, TAGS.BOOTSTRAP, TAGS.MYSQL, TAGS.STRIPE],
    date: "02-2024",
  },
  {
    id: "sinergy",
    images: [sinergy.src, sinergy.src, sinergy.src],
    title: "Sinergia RH - Digital",
    description:
      "Asesora tu empresa PYME - Trabajo pagado. Sistema CRUD en casi la totalidad del sitio con React, Node.Js y MySQL.",
    info: "",
    tags: [TAGS.REACT, TAGS.NODE, TAGS.BOOTSTRAP],
    date: "",
  },
  {
    id: "portfolioargprog",
    images: [portfolioargprog.src, portfolioargprog.src, portfolioargprog.src],
    title: "Portfolio web",
    description:
      "Proyecto final de cursado Argentina Programa 4.0. CRUD con API Rest en Spring Boot y base de datos MySQL. Incluye animaciones hechas con GSAP.",
    info: "",
    repo: "https://github.com/XMrtN/ms-portfolio-frontend",
    date: "01-2023",
    web: "https://martinsepulvedaportfolio.web.app/",
    tags: [TAGS.ANGULAR, TAGS.SPRING, TAGS.BOOTSTRAP],
  },
  {
    id: "imcalculator",
    images: [imcalculator.src, imcalculator.src, imcalculator.src],
    title: "IMCalculator",
    description:
      "Calculadora de índice de masa corporal con una vista gráfica del estado de la persona.",
    info: "",
    repo: "https://github.com/XMrtN/IMCalculator",
    date: "",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.PHP],
  },
  {
    id: "summonerspedia",
    images: [summonerspedia.src, summonerspedia.src, summonerspedia.src],
    title: "Summoner'spedia",
    description:
      "Acerca del videojuego League of Legends: Wild Rift. Incluye una lista de campeones con páginas individuales detallando información de cada uno.",
    date: "",
    info: "",
    repo: "https://github.com/XMrtN/SummonersPedia",
    date: "",
    web: "https://raw.githack.com/XMrtN/SummonersPedia/master/index.html",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS],
  },
];
