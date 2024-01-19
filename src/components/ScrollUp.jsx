import { useEffect, useState } from "preact/hooks";

const ScrollUp = (props) => {
  const [visible, setVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleBtnVisibility = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", handleBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleBtnVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      title="Ir al inicio"
      onClick={handleScrollToTop}
      class={`group fixed bottom-0 right-0 z-20 mb-[4.25rem] mr-3 rounded-full bg-primary-600 p-2 text-zinc-100 transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 active:bg-primary-800 dark:bg-primary-300 dark:text-zinc-800 dark:focus-visible:ring-primary-600 sm:mb-4 sm:mr-4 ${!visible ? "translate-y-[200%]" : ""}`}
    >
      {props.arrowIcon}
    </button>
  );
};

export default ScrollUp;
