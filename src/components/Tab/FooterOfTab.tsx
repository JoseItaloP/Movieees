import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TBodyTab } from "../../types/TypeBodyTab";

const FooterOfTab = ({
  positionPage,
  previusPage,
  pageNumber,
  max,
  JumpPage,
  nextPage,
}: TBodyTab) => {
  return (
    <>
    {max > 1 && (
        <section className="flex items-center justify-center w-20 mb-4">
        <button onClick={previusPage} className="mr-1">
          <IoIosArrowBack />
        </button>
        {max === pageNumber ? '' : 
        <ul className="flex items-center">
          {positionPage.map((element) => (
            element === pageNumber ? 
            <li
              key={element}
              className="w-7 text-lg font-bold text-darkPink-900 dark:text-darkPink-300 rounded-full flex flex-col items-center justify-center mx-1 text-center hover:cursor-not-allowed"
            >
              {element}
            </li> 
            : 
            <li
              className="w-7 text-lg bg-darkPink-900 dark:bg-darkPink-300 hover:bg-darkPink-600 dark:hover:bg-darkPink-400 rounded-full flex flex-col items-center justify-center mx-1 text-center cursor-pointer"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                JumpPage(element);
              }}
            >
              {element}
            </li>
          ))}
        </ul>}
        {pageNumber === max ? (
          ""
        ) : (
          <button onClick={nextPage} className="ml-1">
            <IoIosArrowForward />
          </button>
        )}
      </section>
    )
  }
    </>
    
  );
};

export default FooterOfTab;
