import { Link } from "react-router-dom";
import Logo from "../../../public/svg/logo-no-background.svg";
import DarkLogo from "../../../public/svg/logo-black.svg";
import Searching from "./Searching";
import Toggle from "../HeaderComponets/Toggle";
import { useState } from "react";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  function handleClick() {
    setIsSelected(!isSelected);
  }

  const handleClickSlide = () => {
    if (isOpen) {
      setAnimateOut(true);
      setTimeout(() => {
        setIsOpen(false);
        setAnimateOut(false);
      }, 500); // Duração da animação (0.5s)
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header className="min-w-full bg-darkPink-100 dark:bg-darkPink-950 transition-all duration-500 z-[100]">
        <section className="flex items-center justify-between  pr-6 pl-6 pt-2.5 pb-2.5">
          <div className="max-h-40 max-w-40">
            <abbr title="Home">
              <Link to={"/"}>
                <img src={isSelected ? DarkLogo : Logo} alt="Moviees Logo" />
              </Link>
            </abbr>
          </div>
          <div>
            <div className="phone:hidden flex items-center gap-4">
              <Searching />{" "}
              <Toggle onClick={handleClick} selected={isSelected} />
            </div>
            <div className="hidden phone:flex items-center z-[30] ">
              <button
                onClick={handleClickSlide}
                className="text-darkPink-950 dark:text-darkPink-300"
              >
                {isOpen ? (
                  <IoClose size={20} />
                ) : (
                  <IoReorderThreeOutline size={20} />
                )}
              </button>
            </div>
          </div>
        </section>
      {(isOpen || animateOut) && (
        <div className={`hidden  phone:flex flex-col items-center gap-4 z-[10] absolute h-2/5 w-full transition-all duration-500
        bg-darkPink-100 dark:bg-darkPink-950 
        rounded-b shadow-[0px_12px_6px_-5px_rgba(0,0,0,0.3)] 
        ${animateOut ? "slideOutTop" : "slideInTop"}`}>
          <Toggle onClick={handleClick} selected={isSelected} />
          <Searching />
        </div>
      )}
      </header>
    </>
  );
};

export default Header;
