import { education } from '../../utils/mockValues/education'
import { EDUCATION_SECTION_ID } from '../../utils/sectionIds'

import EducationItem from './EducationItem'

const EducationSection: React.FC = (): JSX.Element => {
  return (
    <section className="mb-8 md:mb-16 px-5" id={EDUCATION_SECTION_ID}>
      <div className="xl:max-w-contentWidth mx-auto">
        <p className="text-accent text-lg md:text-xl mb-2">Where I gained my knowledge</p>
        <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-6 md:mb-12">Education and courses</h2>
        <ul className="text-xl flex flex-col gap-8 md:gap-10">
          {education.map(({ institution, period, spec, link }, i) => {
            return <EducationItem key={i} institution={institution} link={link} period={period} spec={spec} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default EducationSection
