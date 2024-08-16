
const TopOfTab = ({title}: {title: string}) => {
  return (
    <h1 className="text-6xl phone:text-4xl text-darkPink-900 dark:text-darkPink-300 transition-all duration-500">
    {title}
    </h1>
  )
}

export default TopOfTab
