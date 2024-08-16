
import { Card } from '../../types/cardShow'
import { ShowCard } from '../ShowCard'

const BodyOfTab = ({tab, type}: {tab: Card[], type: string}) => {
  return (
    <div className="grid gap-5 grid-cols-4
      phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 midSize:grid-cols-4 bigSize:grid-cols-5
      justify-items-center mt-10 mb-10 w-full ">
        {tab.map((element) => (
          <ShowCard card={element} type={type} />
        ))}
      </div>
  )
}

export default BodyOfTab
