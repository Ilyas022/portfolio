import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

interface ProjectItemProps {
  name: string
  link: string
  img: string
  technologies: string
  description: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({ description, img, link, name, technologies }): JSX.Element => {
  return (
    <Link
      target="_blank"
      to={link}
      className="block relative sm:before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:rounded-lg before:bg-primary before:opacity-75"
    >
      <img src={img} alt="" className="max-[640px]:mb-4 h-60 sm:h-[480px] w-full rounded-lg object-cover z-[-1]" />
      <div className="text-white sm:absolute sm:top-[40%] sm:left-[10%] sm:z-10 sm:w-2/3 mx-auto">
        <p className="text-accent text-lg md:text-xl">{technologies}</p>
        <h3 className="text-2xl md:text-3xl font-poppins font-semibold mb-2 md:mb-4">{name}</h3>
        <p className="text-lg md:text-xl mb-4 md:mb-8">{description}</p>
        <Button color="accent" text="See project" />
      </div>
    </Link>
  )
}

export default ProjectItem
