type TitTag = {
  Tittle: string;
  Tag: string;
};
export function SecTitTag({ Tittle, Tag }: TitTag) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl text-darkPink-900 dark:text-darkPink-200" data-testeid={`${Tittle}_original`}>
        {Tittle}
      </h2>
      {Tag && (
        <p className="italic text-darkPink-700 dark:text-darkPink-300" data-testeid={`${Tag}_tag`}>
          "{Tag}"
        </p>
      )}
    </div>
  );
}
