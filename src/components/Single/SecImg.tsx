import NotFound from '../../../public/png/NotFoundImg.png'
import { linksUrl } from '../../types/urlFetchs';

type TsecImg = {
  MoviePost: string,
  MovieTittle: string,
}

const SecImg = ({MoviePost, MovieTittle}: TsecImg) => {
  const { image } = linksUrl;
  return (
    <section className="min-w-96 mr-5">
              <img
                src={MoviePost ?
                  image + MoviePost : NotFound}
                alt={MoviePost  ? MovieTittle : `Not Found Image of: ${MovieTittle}`}
                className="border border-darkPink-900 dark:border-darkPink-100 rounded"
              />
    </section>
  )
}

export default SecImg
