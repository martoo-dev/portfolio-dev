export const DarkMode = ({ theme }: { theme: string | null }) => {
  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  onWindowMatch();

  switch (theme) {
    case "dark":
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
      break;
    case "light":
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme);
      break;
    default:
      localStorage.removeItem("theme");
      onWindowMatch();
      break;
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    });

  return null;
};
