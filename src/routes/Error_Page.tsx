import { Link } from "react-router-dom"
import Head from "../helper/head";

const Error_Page = () => {
  return (
    <div className="min-h-screen bg-darkPink-100  dark:bg-darkPink-950 transition-all duration-500 flex flex-col justify-center items-center" >
    <Head tittle="Erro"/>
      <h1 className="text-9xl text-darkPink-950 dark:text-darkPink-300">ERRO</h1>
      <h2 className="text-6xl text-darkPink-800 dark:text-darkPink-300">Something get wrong</h2>
      <h3 className="text-2xl mt-2 text-darkPink-700 dark:text-darkPink-300">Click here to come back to the Home page</h3>
      <Link to={'/'} className="p-4 bg-darkPink-950 text-darkPink-300 dark:bg-darkPink-300 rounded dark:text-darkPink-950 mt-2
      hover:bg-darkPink-700 dark:hover:bg-darkPink-400
      transition-all duration-500
      ">Click Here!</Link>
    </div>
  )
}

export default Error_Page
