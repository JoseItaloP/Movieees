type TfooterS={
    type: string|null,
}
export function FooterOfSearch({type}: TfooterS){
  return (
    <div className="min-h-screen bg-darkPink-100  dark:bg-darkPink-950 mt-10">
          <h1 className="text-4xl text-darkPink-800 dark:text-darkPink-300">
            There are no {type} that matched your query.
          </h1>
</div>
  )
}

