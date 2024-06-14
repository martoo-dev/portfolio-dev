import { motion, useMotionValue } from "framer-motion";
import NavItem from "./NavItem";

export default function Nav(props) {
  const LINKS = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Experiencia",
      link: "/experience",
      element: props.book,
    },
    {
      name: "Proyectos",
      link: "/projects",
      element: props.code,
    },
    {
      name: "Sobre mí",
      link: "/about",
      element: props.user,
    },
    {
      name: "Tema",
      element: props.themeToggle,
    },
  ];

  let mouseX = useMotionValue(Infinity);

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
          pathname={props.pathname}
          {...item}
          isFirst={i === 0}
          isLast={i === LINKS.length - 1}
          mouseX={mouseX}
        />
      ))}
    </motion.div>
  );
}
