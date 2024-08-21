import { PROJECTS_SECTION_ID } from '../../utils/sectionIds'
import ProjectItem from './ProjectItem'
import { projects } from '../../utils/mockValues/projects'

const ProjectsSection: React.FC = (): JSX.Element => {
  return (
    <section className="mb-8 md:mb-16 px-5" id={PROJECTS_SECTION_ID}>
      <div className="xl:max-w-contentWidth w-full mx-auto">
        <div className="text-accent text-lg md:text-xl mb-2">What I do</div>
        <div className="font-poppins text-2xl md:text-3xl font-semibold mb-6 md:mb-12">Recent projects</div>
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="mx-auto max-w-[936px] min-[1100px]:odd:translate-x-10 [&:not(:last-child)]:mb-16"
          >
            <ProjectItem {...project} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
