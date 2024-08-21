import cn from 'classnames'
import { Link } from 'react-router-dom'
import { HomeLinkType } from '../../../utils/mockValues/homeLinks'

interface BubbleIconProps extends HomeLinkType {}
const containerVariants = {
  telegram: 'min-[1000px]:top-1/3 min-[1000px]:left-[30%] min-[1000px]:animate-float',
  github: 'min-[1000px]:top-[10%] min-[1000px]:right-1/3 min-[1000px]:animate-float',
  email: 'min-[1000px]:top-[45%] min-[1000px]:right-1/4 min-[1000px]:animate-floatReverse',
}

const iconVariants = {
  telegram: 'border-telegramBg bg-telegramBg min-[1000px]:-translate-x-1/2',
  github: 'border-githubBg dark:border-githubBgDark bg-githubBg dark:bg-githubBgDark min-[1000px]:translate-x-1/2',
  email: 'border-emailBg dark:border-emailBgDark  bg-emailBg dark:bg-emailBgDark min-[1000px]:translate-x-1/2',
}

function BubbleIcon({ icon, link, name }: BubbleIconProps) {
  return (
    <div className={cn('min-[1000px]:absolute flex items-center justify-center', containerVariants[name])}>
      <Link
        to={link}
        target="_blank"
        className={cn(
          'max-[1000px]:border-8 border-[20px] border-solid rounded-full  cursor-pointer min-[1000px]:hover:border-[40px]  duration-300',
          iconVariants[name]
        )}
      >
        <img className="w-6 h-6 bg-bg dark:bg-bgDark rounded-full" src={icon} alt={name} />
      </Link>
    </div>
  )
}

export default BubbleIcon
