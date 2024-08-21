import LanguageItem from './LanguageItem'
import { LANGUSGES_SECTION_ID } from '../../utils/sectionIds'
import { languages } from '../../utils/mockValues/languages'

const LanguagesSection: React.FC = (): JSX.Element => {
  return (
    <section className="mb-8 md:mb-16 px-5" id={LANGUSGES_SECTION_ID}>
      <div className="xl:max-w-contentWidth mx-auto">
        <p className="text-accent text-lg md:text-xl mb-2">I can speak</p>
        <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-6 md:mb-12">Languages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-7">
          {languages.map(({ language, stage }, i) => {
            return <LanguageItem key={i} language={language} stage={stage} />
          })}
        </div>
      </div>
    </section>
  )
}

export default LanguagesSection
