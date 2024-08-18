import { FormEvent, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const Searching = () => {
  const [selected, setSelected] = useState<string>("Movie");
  const [search, setSearch] = useState<string>("")
  const navigate = useNavigate()


  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(!search) return 
    navigate(`/search?q=${search}&t=${selected}&page=1`)
    setSearch("")
  }

  useEffect(()=>{

    const Enter = (event: KeyboardEvent) =>{
      if(event.key === 'Enter'){
        event.preventDefault()
        if(!search) return 
        navigate(`/search?q=${search}&t=${selected}&page=1`)
        setSearch("")
      }
    }

    document.addEventListener('keydown', Enter)

    return () => {
      document.removeEventListener("keydown", Enter)
    }
  })


  return (
    <nav>
      <form className="flex h-8" onSubmit={handleSubmit}>
        <select
          name="Search"
          id="SearchSelect"
          onChange={(e) => setSelected(e.target.value)}
          className="bg-darkPink-950 dark:bg-darkPink-100 dark:text-darkPink-900 text-darkPink-300 rounded-l-md "
        >
          <option value="Movie" selected>
            Movie
          </option>
          <option value="TV">TV</option>
        </select>
        <div className="flex">
          <input
            type="text"
            name="Serch"
            id="Search"
            placeholder={`Search by the ${selected}`}
            onChange={({target})=>setSearch(target.value)}
            value={search}
            className="dark:bg-darkPink-100 bg-darkPink-300 placeholder:text-darkPink-900 text-darkPink-900 border-black p-2 "
          />
          <button className="p-2 dark:bg-darkPink-100 bg-darkPink-950 rounded-r-md text-darkPink-300 dark:text-darkPink-900">
            <IoSearch />{" "}
          </button>
        </div>
      </form>
      
    </nav>
  );
};

export default Searching;
