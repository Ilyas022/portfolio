import { LanguageItemProps } from './types'

function LanguageItem({ language, stage }: LanguageItemProps) {
  return (
    <div className="relative pt-4 before:absolute before:top-0 before:left-0 before:w-20 before:h-1 before:bg-accent">
      <p className="text-xl sm:text-2xl font-poppins font-semibold mb-2">{language}</p>
      <p className="text-lg sm:text-xl">{stage}</p>
    </div>
  )
}

export default LanguageItem
