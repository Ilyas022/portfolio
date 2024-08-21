import { Link } from 'react-scroll'
import { twMerge } from 'tailwind-merge'
import cn from 'classnames'
import { NavbarProps } from './types'
import { headerLinks } from '../../../utils/mockValues/headerLinks'

function Navbar({ isOpened, setOpened }: NavbarProps) {
  return (
    <nav
      className={twMerge(
        'max-[800px]:fixed max-[800px]:py-20 max-[800px]:top-0 max-[800px]:left-0 max-[800px]:w-full max-[800px]:h-full max-[800px]:bg-bg dark:max-[800px]:bg-bgDark max-[800px]:z-10 max-[800px]:overflow-auto nav',
        isOpened && ' nav_active'
      )}
    >
      <ul className="flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:justify-center gap-8">
        {headerLinks.map((link, i) => {
          return (
            <li
              key={i}
              className={cn(
                'relative max-[800px]:w-full max-[800px]:text-center before:absolute before:right-0 hover:before:left-0 before:-bottom-1 before:block before:w-0 before:h-[3px] min-[800px]:hover:before:w-full before:bg-accent before:duration-500 cursor-pointer max-[800px]:translate-x-full'
              )}
            >
              <Link spy={true} smooth={true} onClick={() => isOpened && setOpened()} to={link.to} offset={-92}>
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
