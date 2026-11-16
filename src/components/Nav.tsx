import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";

import { AiFillSetting } from "react-icons/ai";

import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const menuLinks: { label: string; dest: string }[] = [
  {
    label: "work",
    dest: "/#work",
  },
  {
    label: "experience",
    dest: "/#experience",
  },
  {
    label: "skills",
    dest: "/#skills",
  },
  {
    label: "connect",
    dest: "/#connect",
  },
];

function Nav() {
  const navigate = useNavigate();

  const [themeSelector, setThemeSelector] = useState("rise");

  const [openTheme, setOpenTheme] = useState(false);
  const openThemeRef = useRef<HTMLButtonElement>(null);
  const menuThemeRef = useRef<HTMLDivElement>(null);

  function handleOpenTheme() {
    setOpenTheme((prev) => !prev);
  }

  function handleTheme(val: string) {
    setThemeSelector(val);
  }

  useEffect(function () {
    function checkOutsideClick(e: Event) {
      if (!menuThemeRef.current) return;

      if (
        e.target instanceof Node &&
        !menuThemeRef.current.contains(e.target) &&
        !openThemeRef.current?.contains(e.target)
      ) {
        setOpenTheme(false);
      }
    }

    window.addEventListener("click", checkOutsideClick);

    return () => {
      window.removeEventListener("click", checkOutsideClick);
    };
  }, []);

  return (
    <div className="w-full max-w-[1156px] mx-auto pt-5 pb-2 px-2">
      <div className="w-full flex justify-between items-center">
        {/* Name and Role */}
        <div
          role="button"
          className="flex flex-col items-start cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h4 className="font-bold font-outfit text-lg tracking-wider text-(--key-primary-dark) text-shadow-2xs text-shadow-orange-500">
            Jaivardhan Singh
          </h4>
          <p className="text-(--key-text-light) text-sm font-bold pl-px tracking-wide">
            Full-Stack Developer
          </p>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex justify-center items-center gap-10 px-5">
          {menuLinks.map((menuLink) => (
            <li
              key={menuLink.label}
              role="button"
              className="tracking-wide text-lg font-bold text-(--key-text) hover:text-(--key-primary-dark) cursor-pointer transition-all duration-200 ease-in"
            >
              {menuLink.label}
            </li>
          ))}
        </ul>

        {/* Theme selector */}
        <button
          className="hidden lg:inline-block cursor-pointer relative"
          onClick={handleOpenTheme}
          ref={openThemeRef}
        >
          <AiFillSetting className="size-5" />
          <AnimatePresence>
            {openTheme && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  transformOrigin: "top right",
                  scale: 1,
                  opacity: 100,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  transformOrigin: "top right",
                  transition: { duration: 0.1, ease: "easeIn" },
                }}
                ref={menuThemeRef}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute z-100 right-0 top-10 rounded-lg py-3 px-5 ring-2 ring-(--key-ring-dark) text-(--key-text) bg-(--key-bgColorDark)"
              >
                <div className="w-full flex justify-center items-center gap-3 py-1 px-2 relative bg-(--key-bgGrayLightColor) rounded-2xl shadow-[0.5px_2px_1px_1px_var(--key-ring-dark)]">
                  <button
                    onClick={() => handleTheme("rise")}
                    className="z-120 flex justify-center items-center gap-1 cursor-pointer"
                  >
                    <WiSunrise
                      className={`${themeSelector !== "rise" ? "text-(--key-primary)" : "text-white"}`}
                    />
                    <span
                      className={`text-sm tracking-wide ${themeSelector !== "rise" ? "text-(--key-primary)" : "text-white font-bold"}`}
                    >
                      rise
                    </span>
                  </button>
                  <button
                    onClick={() => handleTheme("dawn")}
                    className="z-120 flex justify-center items-center gap-1 cursor-pointer"
                  >
                    <WiSunset
                      className={`${themeSelector !== "dawn" ? "text-(--key-primary)" : "text-white"}`}
                    />
                    <span
                      className={`text-sm ${themeSelector !== "dawn" ? "text-(--key-primary)" : "text-white font-bold"}`}
                    >
                      dawn
                    </span>
                  </button>
                  <button
                    onClick={() => handleTheme("dream")}
                    className="z-120 flex justify-center items-center gap-1 cursor-pointer"
                  >
                    <WiNightClear
                      className={`${themeSelector !== "dream" ? "text-(--key-primary)" : "text-white"}`}
                    />
                    <span
                      className={`text-sm ${themeSelector !== "dream" ? "text-(--key-primary)" : "text-white font-bold"}`}
                    >
                      dream
                    </span>
                  </button>
                  <div
                    className={`absolute top-0 left-0 z-110 w-full h-full rounded-2xl flex items-center ${themeSelector === "rise" ? "justify-start" : themeSelector === "dawn" ? "justify-center" : "justify-end"}`}
                  >
                    <motion.div
                      layout
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 250,
                      }}
                      className={`${themeSelector === "rise" ? "w-[31%]" : themeSelector === "dawn" ? "w-[35%]" : "w-[36%]"} h-full ${themeSelector === "rise" ? "rounded-2xl" : themeSelector === "dawn" ? "mr-2 rounded-2xl" : "rounded-2xl"} bg-(--key-primary)`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

export default Nav;
