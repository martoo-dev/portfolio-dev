import { useEffect, useRef, useState } from "preact/hooks";
import { DarkMode } from "../services/darkmode";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
  );

  const LINKS = [
    {
      href: "#inicio",
      name: "Inicio",
      icon: props.homeIcon,
    },
    {
      href: "#proyectos",
      name: "Proyectos",
      icon: props.photoIcon,
    },
    {
      href: "#sobre-mi",
      name: "Sobre mí",
      icon: props.userIcon,
    },
    {
      href: "#contacto",
      name: "Contacto",
      icon: props.sendIcon,
    },
  ];

  const BUTTONS = [
    {
      icon: props.sunIcon,
      text: "light",
    },
    {
      icon: props.moonIcon,
      text: "dark",
    },
    {
      icon: props.desktopIcon,
      text: "system",
    },
  ];

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      {DarkMode({ theme })}
      <header className="fixed bottom-0 z-40 w-full tracking-wider sm:bottom-auto sm:top-0">
        <nav
          ref={menuRef}
          className="bg-gradient-to-r from-primary-100 to-primary-400 font-semibold text-primary-900 dark:bg-primary-950 dark:bg-none dark:text-primary-300"
        >
          <div className="mx-auto flex items-center justify-between gap-2 overflow-hidden px-3 py-1.5 sm:max-lg:container lg:max-w-3xl">
            <a className="py-1.5 text-2xl" href="#inicio">
              {props.codeIcon}
            </a>

            <div className="flex items-center gap-2 sm:order-1">
              <button
                type="button"
                title={open ? "close" : "menu"}
                aria-label={open ? "close" : "menu"}
                onClick={() => setOpen(!open)}
                className="grid size-9 place-content-center rounded-full transition-colors active:text-primary-600 sm:hidden"
              >
                {open ? props.closeIcon : props.menuIcon}
              </button>

              {BUTTONS.map((btn) => (
                <button
                  type="button"
                  key={btn.text}
                  title={btn.text}
                  aria-label={btn.text}
                  onClick={() => setTheme(btn.text)}
                  className={`grid size-9 place-content-center rounded-full transition-colors hover:text-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 active:text-primary-600 dark:hover:text-primary-300 dark:active:text-primary-600 ${
                    theme !== btn.text ? "text-primary-600" : ""
                  } ${
                    btn.text === "system" || theme === btn.text
                      ? "hidden xs:grid"
                      : ""
                  }`}
                >
                  {btn.icon}
                </button>
              ))}
            </div>

            <div
              className={`fixed bottom-14 left-0 -z-10 w-full items-center gap-2 sm:static sm:z-0 sm:flex ${
                open ? "" : "translate-y-full"
              } bg-gradient-to-r p-3 transition-transform dark:bg-primary-950 dark:bg-none sm:translate-y-0 sm:bg-none sm:p-0`}
            >
              <ul className="grid grid-cols-2 items-center gap-1 xs:grid-cols-3 sm:mx-auto sm:flex">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-label={link.name}
                      onClick={() => setOpen(false)}
                      className="flex flex-col items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 leading-4 hover:bg-primary-100/30 active:bg-primary-100/70 dark:hover:bg-primary-900/30 dark:active:bg-primary-900/70"
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
