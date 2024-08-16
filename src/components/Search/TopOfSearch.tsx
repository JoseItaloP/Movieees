export default function TopOfSearch({query}: {query: string | null}){
  return (
    <h1 className="text-5xl phone:text-3xl mt-5 text-darkPink-950 dark:text-darkPink-200 max-w-max ransition-all duration-500">
          Results from search: "
          <span className="text-darkPink-600 dark:text-darkPink-800">
            {query}
          </span>
          "
    </h1>
  )
}
