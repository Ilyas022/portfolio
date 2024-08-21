import listIcon from '../../../assets/img/listIcon.svg'
import { ExperienceItemProps } from './types'

function ExperienceItem({ duties, location, period, place, position }: ExperienceItemProps) {
  return (
    <>
      <div className="pt-2 font-semibold text-base md:text-xl grow-0">
        <p className="mb-4 after:block after:w-20 after:h-1 after:mt-4 after:bg-accent">{period}</p>
        <p className="mb-1 font-poppins font-bold">{place}</p>
        <p className="font-normal italic">{location}</p>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8">{position}</h3>
        <ul className="flex flex-col gap-5 font-ubuntu text-base md:text-xl">
          {duties.map((duty, index) => {
            return (
              <li key={index} className="px-6 relative">
                <img className="absolute top-[5px] left-0 h-[17px] w-[10px]" src={listIcon} alt="list icon" />
                <p>{duty}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default ExperienceItem
