import data from "../types/data";
import { linksUrl } from "../types/urlFetchs";

const { image } = linksUrl;

const getTopRatedMovies = async (url: string) => {
  const res = await fetch(url);
  const data: data = await res.json();
  return data;
};

const getImage = (urlObject: string) => `${image + urlObject}`
    
    

export { getTopRatedMovies, getImage };
