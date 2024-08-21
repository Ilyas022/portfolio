import { animateScroll as Scroll } from 'react-scroll'
import { useEffect, useState } from 'react'

import Header from './components/Header'

import EducationSection from './sections/EducationSection'
import FactsSection from './sections/FactSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection/ExperienceSection'
import HomeSection from './sections/HomeSection'
import LanguagesSection from './sections/LanguagesSection'
import ProjectsSection from './sections/ProjectsSection'

function App() {
  const [isButtonShown, setButtonShown] = useState<boolean>(false)

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setButtonShown(true) : setButtonShown(false)
    }

    window.addEventListener('scroll', handleScrollButtonVisibility)

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility)
    }
  }, [])

  const scrollToTop = () => {
    Scroll.scrollToTop()
  }
  return (
    <>
      <Header />
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <FactsSection />
      <EducationSection />
      <LanguagesSection />
      <button
        className={`${
          isButtonShown ? 'opacity-100' : 'opacity-0 invisible'
        } transition-all duration-300 font-semibold fixed rounded-full bottom-20 right-10 hidden sm:flex items-center justify-center w-12 h-12 bg-accent text-text dark:text-textDarsk`}
        onClick={scrollToTop}
      >
        Top
      </button>
    </>
  )
}

export default App
