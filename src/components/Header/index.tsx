import { useEffect, useState } from 'react'
import { useScrollLock } from '../../hooks/useScroll'
import Navbar from './Navbar'
import BurgerButton from './BurgerButton'
import ThemeToggler from './ThemeToggler'

const Header: React.FC = (): JSX.Element => {
  const [isMenuOpened, setMenuOpened] = useState<boolean>(false)
  const [lockScroll, unlockScroll] = useScrollLock()

  useEffect(() => {
    isMenuOpened ? lockScroll() : unlockScroll()
  }, [isMenuOpened, lockScroll, unlockScroll])

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev)
  }

  return (
    <header className="fixed z-20 top-0 left-0 w-full bg-bg dark:bg-bgDark text-text dark:text-textDark text-xl duration-300">
      <div className="mx-auto p-8 flex justify-between w-full max-w-contentWidth">
        <ThemeToggler />
        <Navbar isOpened={isMenuOpened} setOpened={handleMenuToggle} />
        <BurgerButton isOpened={isMenuOpened} setOpened={handleMenuToggle} />
      </div>
    </header>
  )
}

export default Header
