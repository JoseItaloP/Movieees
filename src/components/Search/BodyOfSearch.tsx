import { TBodySearch } from "../../types/TypeBodySearch";
import JumpPage from "../JumpPage";
import { ShowCard } from "../ShowCard";

function BodyOfSearch({
  results,
  type,
  previusPage,
  positionPage,
  pageNumber,
  max,
  nextPage,
  JumptoPage,
}: TBodySearch) {
  return (
    <div className="flex flex-col justify-center items-center transition-all duration-500 w-full">
      <div
        className="grid gap-5 grid-cols-4
      phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 midSize:grid-cols-4 bigSize:grid-cols-5
      justify-items-center mt-10 mb-10 w-full "
      >
        {results.map((element) => (
          <ShowCard key={element.id} card={element} type={type} />
        ))}
      </div>
      <JumpPage
        previusPage={previusPage}
        positionPage={positionPage}
        pageNumber={pageNumber}
        max={max}
        nextPage={nextPage}
        JumptoPage={JumptoPage}
      />
    </div>
  );
}

export default BodyOfSearch;
