import FactItem from './FactItem'
import { FACTS_SECTION_ID } from '../../utils/sectionIds'
import { facts } from '../../utils/mockValues/facts'

const FactsSection: React.FC = (): JSX.Element => {
  return (
    <section className="mb-8 md:mb-16" id={FACTS_SECTION_ID}>
      <div className="xl:max-w-maxWidth px-5 sm:px-8 lg:px-24 py-8 sm:py-16 lg:py-20 mx-auto rounded-lg bg-gradient-to-b from-primary to-accent/60 text-text dark:bg-none dark:bg-primary">
        <div className="text-accent text-lg md:text-xl mb-2">Some facts about me</div>
        <div className="font-poppins text-2xl md:text-3xl font-semibold mb-6 md:mb-12">Statistical indicators</div>
        <ul className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-4 gap-7">
          {facts.map(({ title, text }, i) => {
            return <FactItem key={i} text={text} title={title} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default FactsSection
