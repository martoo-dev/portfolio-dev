import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";

export default function Nav(props) {
  const [activeLink, setActiveLink] = useState("/#home");
  const LINKS = [
    {
      name: "Inicio",
      link: "/#home",
    },
    {
      name: "Experiencia",
      link: "/#experience",
      element: props.book,
    },
    {
      name: "Proyectos",
      link: "/#projects",
      element: props.code,
    },
    {
      name: "Sobre mí",
      link: "/#about",
      element: props.user,
    },
    {
      name: "Tema",
      element: props.themeToggle,
    },
  ];

  let mouseX = useMotionValue(Infinity);

  const scrollSpy = () => {
    for (let i = LINKS.length - 2; i >= 0; i--) {
      const section = document.getElementById(LINKS[i].link.replace("/#", ""));
      if (!section) return;
      const rect = section.getBoundingClientRect();

      if (rect.top <= 200) {
        setActiveLink(LINKS[i].link);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollSpy);

    return () => window.removeEventListener("scroll", scrollSpy);
  }, []);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-8 left-1/2 z-[99999] flex h-14 -translate-x-1/2 items-end gap-2 p-2"
    >
      <div className="box-outline absolute inset-0 -z-10 size-full rounded-full shadow" />
      {LINKS.map((item, i) => (
        <NavItem
          key={i}
          activeLink={activeLink}
          {...item}
          isFirst={i === 0}
          isLast={i === LINKS.length - 1}
          mouseX={mouseX}
        />
      ))}
    </motion.div>
  );
}
