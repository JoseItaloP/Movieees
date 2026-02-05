import { IconType } from "react-icons";

type SecP = {
  Type: number;
  Icon: IconType;
  Name: string;
  SecondT?: string;
  BR?: boolean;
  element1: string | number | [string] | boolean;
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
        <p data-testid={`type1_${Name}`}
          className="mb-1 flex items-center">
          <span
            className="text-darkPink-900 dark:text-darkPink-200 flex items-center"
            data-testid={`type1_${Name}_span`}
          >
            <Icon size={18} />
            {Name}
          </span>
          : {element1} | {element2}
        </p>
      );
      break;
    case 2:
      return (
        <p data-testid={`type2_${Name}`}
          className="mb-1 flex items-center">
          <span
            className="text-darkPink-900 dark:text-darkPink-200 flex items-center"
            data-testid={`type2_${Name}_span`}
          >
            <Icon size={18} />
            {Name}
          </span>
          : {typeof element1 === "string" ? element1.split("-").join("/") : ""}
        </p>
      );
      break;
    case 3:
      return (
        <p data-testid={`type3_${Name}`}
          className="flex items-center">
          <span
            data-testid={`type3_${Name}_span`}
            className="text-darkPink-900 dark:text-darkPink-200 flex items-center">
            <Icon size={18} />
            {Name}
          </span>
          : ${" "}
          {typeof element1 === "number"
            ? element1.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
            : ""}
        </p>
      );
      break;
    case 4:
      return BR ? (
        <p data-testid={`type4_${Name}_${BR}`}>
          <span
            className="text-darkPink-900 dark:text-darkPink-200 flex items-center">
            <Icon size={18} />
            <h3
              data-testid={`type4_${Name}_${BR}_span`}
              className="text-1xl">{Name}</h3>-
          </span>
          <br />
          {element1} {SecondT}
        </p>
      ) : (
          <p data-testid={`type4_${Name}`}
            className="flex items-center">
            <span
              data-testid={`type4_${Name}_span`}
              className="text-darkPink-900 dark:text-darkPink-200 flex items-center">
            <Icon size={18} />
            {Name}
          </span>
          :{element1} {SecondT}
        </p>
      );
      break;
    case 5:
      return (
        <>
          {element1 && (
            <p data-testid={`type5_${Name}`}
              className="flex items-center">
              <span
                data-testid={`type5_${Name}_span`}
                className="text-darkPink-900 dark:text-darkPink-300 flex items-center italic">
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
