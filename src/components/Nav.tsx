import { useNavigate } from "react-router";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";

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

const themeVariants: { label: string; value: string }[] = [
  {
    label: "rise",
    value: "rise",
  },
  {
    label: "dream",
    value: "dream",
  },
];

function Nav() {
  const navigate = useNavigate();
  const [openTheme, setOpenTheme] = useState(false);

  function handleOpenTheme() {
    setOpenTheme((prev) => !prev);
  }

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
        <button className="cursor-pointer relative" onClick={handleOpenTheme}>
          <AiFillSetting className="size-5" />
          {openTheme && (
            <div className="absolute right-0 top-10 rounded-2xl py-3 px-5 ring-2 ring-(--key-text)">
              <ul className="w-full flex justify-center items-center gap-2">
                {themeVariants.map((variant) => (
                  <li key={variant.label} className=""></li>
                ))}
              </ul>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Nav;
