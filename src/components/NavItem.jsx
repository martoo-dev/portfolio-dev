import { motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function NavItem({
  pathname,
  link,
  name,
  element,
  isFirst,
  isLast,
  mouseX,
}) {
  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <>
      {isLast && (
        <hr className="my-auto h-8 w-px bg-neutral-300 dark:bg-neutral-700" />
      )}
      <div className="group relative shrink-0 hover:z-10">
        <motion.a
          ref={ref}
          href={link || null}
          className="nav-item peer"
          style={{ width }}
        >
          {isFirst ? (
            <img src="/martin.webp" className="size-full object-cover" />
          ) : (
            element
          )}
        </motion.a>
        <span className="pointer-events-none absolute -top-6 left-1/2 -z-10 -translate-x-1/2 pb-4 opacity-0 transition-[top,opacity] hover:pointer-events-auto hover:-top-9 hover:opacity-100 group-hover:pointer-events-auto peer-hover:-top-9 peer-hover:opacity-100">
          <span className="whitespace-nowrap rounded-md bg-neutral-100 px-3 py-2 text-sm font-light text-neutral-950 ring-1 ring-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:ring-white/10">
            {name}
          </span>
        </span>
        {link && link === pathname && (
          <div className="absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-sky-600 dark:bg-sky-300" />
        )}
      </div>
    </>
  );
}
