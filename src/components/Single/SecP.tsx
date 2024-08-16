import { IconType } from "react-icons";

type SecP = {
  Type: number;
  Icon: IconType;
  Name: string;
  SecondT?: string;
  BR?: boolean;
  element1: string | number | [] | boolean;
  element2?: string | number;
};
export function SecP({
  Type,
  Icon,
  Name,
  element1,
  element2,
  SecondT,
  BR = false,
}: SecP) {
  switch (Type) {
    case 1:
      return (
        <p className="mb-1 flex items-center">
          <span className="text-darkPink-900 dark:text-darkPink-200 flex items-center">
            <Icon size={18} />
            {Name}
          </span>
          : {element1} | {element2}
        </p>
      );
      break;
    case 2:
      return (
        <p className="mb-1 flex items-center">
          <span className="text-darkPink-900 dark:text-darkPink-200 flex items-center">
            <Icon size={18} />
            {Name}
          </span>
          : {element1.replaceAll("-", "/")}
        </p>
      );
      break;
    case 3:
      return (
        <p className="flex items-center">
          <span className="text-darkPink-900 dark:text-darkPink-200 flex items-center">
            <Icon size={18} />
            {Name}
          </span>
          : $ {element1.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </p>
      );
      break;
    case 4:
      return BR ? (
        <p>
          <span className="text-darkPink-900 dark:text-darkPink-200 flex items-center">
            <Icon size={18} />
            <h3 className="text-1xl">{Name}</h3>-
          </span>
          <br />
          {element1} {SecondT}
        </p>
      ) : (
        <p className="flex items-center">
          <span className="text-darkPink-900 dark:text-darkPink-200 flex items-center">
            <Icon size={18} />
            {Name}
          </span>
          :{element1} {SecondT}
        </p>
      );
      break;
    case 4:
      return (
        <>
          {element1 && (
            <p className="flex items-center ">
              <span className="text-darkPink-900 dark:text-darkPink-300 flex items-center italic">
                <Icon size={18} />
               {Name}
              </span>
            </p>
          )}
        </>
      );
    default:
      return;
  }
}
