// import ghIcon from '../assets/icons/ghIcon.svg'
import ghIcon from '../../assets/icons/ghIcon.svg'
import tgIcon from '../../assets/icons/tgIcon.svg'
import emailIcon from '../../assets/icons/emailIcon.svg'

export type HomeLinkType = {
  name: 'email' | 'github' | 'telegram'
  link: string
  icon: string
}

export const homeLinks: HomeLinkType[] = [
  {
    name: 'telegram',
    link: 'https://t.me/ilya_shchetko',
    icon: tgIcon,
  },
  {
    name: 'github',
    link: 'https://github.com/Ilyas022',
    icon: ghIcon,
  },
  {
    name: 'email',
    link: 'mailto:ilyashchetko.work@gmail.com',
    icon: emailIcon,
  },
]
