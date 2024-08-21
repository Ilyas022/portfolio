import { experience } from '../../utils/mockValues/experience'
import { EXPERIENCE_SECTION_ID } from '../../utils/sectionIds'
import ExperienceItem from './ExperienceItem/indext'

const ExperienceSection: React.FC = (): JSX.Element => {
  return (
    <section className="mb-8 md:mb-16 px-5" id={EXPERIENCE_SECTION_ID}>
      <div className="xl:max-w-contentWidth mx-auto">
        <p className="text-accent text-lg md:text-xl mb-2">Where I worked</p>
        <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-1 sm:mb-6 md:mb-12">Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr,2fr] gap-5 font-poppins border-text dark:border-textDark border-solid [&:not(:last-child)]:border-b [&:not(:last-child)]:mb-16 [&:not(:last-child)]:pb-16">
          {experience.map((exp, i) => {
            return <ExperienceItem key={i} {...exp} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
