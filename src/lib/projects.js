import Angular from "@/components/logos/angular.astro";
import Astro from "@/components/logos/astroo.astro";
import Bootstrap from "@/components/logos/bootstrap.astro";
import CSS from "@/components/logos/css.astro";
import HTML from "@/components/logos/html.astro";
import JS from "@/components/logos/javascript.astro";
import MySQL from "@/components/logos/mysql.astro";
import NodeJS from "@/components/logos/nodejs.astro";
import PHP from "@/components/logos/php.astro";
import React from "@/components/logos/react.astro";
import Spring from "@/components/logos/spring.astro";
import Stripe from "@/components/logos/stripe.astro";
import Tailwind from "@/components/logos/tailwind.astro";
import fairway from "public/projects/fairway.webp";
import fairway1 from "public/projects/fairway1.webp";
import fairway2 from "public/projects/fairway2.webp";
import fairway3 from "public/projects/fairway3.webp";
import fairway4 from "public/projects/fairway4.webp";
import fairway5 from "public/projects/fairway5.webp";
import imcalculator from "public/projects/imcalculator.webp";
import portfolioargprog from "public/projects/portfolioargprog.webp";
import sinergy from "public/projects/sinergy.webp";
import summonerspedia from "public/projects/summonerspedia.webp";

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
    color: "violet",
    icon: Bootstrap,
  },
  SPRING: {
    name: "Spring Boot",
    color: "green",
    icon: Spring,
  },
  MYSQL: {
    name: "MySQL",
    color: "sky",
    icon: MySQL,
  },
  HTML: {
    name: "HTML",
    color: "orange",
    icon: HTML,
  },
  CSS: {
    name: "CSS",
    color: "sky",
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
    title: "Fairway-Indoor Golf",
    date: "2024-02",
    description:
      "Libera tu pro interior con los mejores cursos de golf. La principal experiencia de golf interior de Portage, Indiana, cuyo lugar es la combinación perfecta de golf y restaurante, con cuatro bahías de última generación para demostrar tus habilidades y un bar completo para que disfrutes de los cócteles más deliciosos. Llueva o haga sol, de día o de noche, ¡juegue a su antojo en Fairway Indoor Golf!",
    info: "Trabajo pagado. Incluye un sistema de reservas integrando una API externa de pagos con tarjetas.",
    tags: [TAGS.REACT, TAGS.NODE, TAGS.BOOTSTRAP, TAGS.MYSQL, TAGS.STRIPE],
  },
  {
    id: "sinergiarh-digital",
    images: [sinergy.src, sinergy.src, sinergy.src],
    title: "SinergiaRH-Digital",
    date: "2024-02",
    description: "Asesora tu empresa PYME.",
    info: "Trabajo pagado. Sistema CRUD en casi la totalidad del sitio con React, Node.Js y MySQL.",
    tags: [TAGS.REACT, TAGS.NODE, TAGS.BOOTSTRAP],
  },
  {
    id: "portfolioargprog",
    images: [portfolioargprog.src, portfolioargprog.src, portfolioargprog.src],
    title: "Portfolio web",
    date: "2023-01",
    description: "Proyecto final de cursado Argentina Programa 4.0.",
    info: "CRUD con API Rest en Spring Boot y base de datos MySQL. Incluye animaciones hechas con GSAP.",
    repo: "https://github.com/XMrtN/ms-portfolio-frontend",
    web: "https://martinsepulvedaportfolio.web.app/",
    tags: [TAGS.ANGULAR, TAGS.SPRING, TAGS.BOOTSTRAP],
  },
  {
    id: "imcalculator",
    images: [imcalculator.src, imcalculator.src, imcalculator.src],
    title: "IMCalculator",
    date: "2021-11",
    description:
      "Calculadora de índice de masa corporal con una tabla de los estados del IMC.",
    info: "Calculadora gráfica con una vista gradual del estado del sujeto. Desarrollada en PHP.",
    repo: "https://github.com/XMrtN/IMCalculator",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.PHP],
  },
  {
    id: "summonerspedia",
    images: [summonerspedia.src, summonerspedia.src, summonerspedia.src],
    title: "Summoner'spedia",
    date: "2021-11",
    description: "Acerca del videojuego League of Legends: Wild Rift.",
    info: "Incluye una lista de campeones con páginas individuales detallando información de cada uno. El proyecto entregado contenía una simulación de login con PHP llamando a una BDD, aunque el archivo en cuestión se corrompió con el tiempo.",
    repo: "https://github.com/XMrtN/SummonersPedia",
    web: "https://raw.githack.com/XMrtN/SummonersPedia/master/index.html",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS, TAGS.PHP],
  },
];
