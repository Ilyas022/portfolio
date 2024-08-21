import SkillItem from './SkillItem'
import { SKILLS_SECTION_ID } from '../../utils/sectionIds'
import { skills } from '../../utils/mockValues/skills'

const SkillsSection: React.FC = (): JSX.Element => {
  return (
    <section className="mb-8 md:mb-16" id={SKILLS_SECTION_ID}>
      <div className="xl:max-w-maxWidth px-5 sm:px-8 lg:px-24 py-8 sm:py-16 lg:py-20 mx-auto rounded-lg bg-gradient-to-b from-primary to-accent/60 dark:bg-none dark:bg-primary text-text">
        <div className="text-accent text-lg md:text-xl mb-2">Why hire me</div>
        <div className="font-poppins text-2xl md:text-3xl font-semibold mb-6 md:mb-12">Hard skills</div>
        <div className="grid max-[410px]:grid-cols-1 max-[410px]:justify-items-center grid-cols-[auto,auto] gap-x-1 gap-y-5 md:gap-3 md:gap-y-10 md:grid-cols-3 min-[1100px]:grid-cols-4">
          {skills.map((skills, index) => {
            return (
              <ul key={index}>
                {skills.map((skill, i) => {
                  return <SkillItem key={skill + i} skill={skill} />
                })}
              </ul>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
