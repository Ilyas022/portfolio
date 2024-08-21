import { useState, useEffect } from 'react'
import moonIcon from '../../../assets/icons/moonIcon.svg'
import sunIcon from '../../../assets/icons/sunIcon.svg'

function ThemeToggler() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <button onClick={handleThemeSwitch}>
      <img
        className="w-[25px] h-[25px] opacity-75 hover:opacity-100 duration-300"
        src={theme === 'dark' ? sunIcon : moonIcon}
        alt="moon"
      />
    </button>
  )
}

export default ThemeToggler
