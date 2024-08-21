import { FactItemProps } from './types'

function FactItem({ text, title }: FactItemProps) {
  return (
    <li className="relative pt-4 text-xl before:absolute before:top-0 before:left-0 before:w-20 before:h-1 before:bg-accent">
      <p className="font-poppins font-semibold text-5xl md:text-6xl">{title}</p>
      <p className="text-base md:text-xl">{text}</p>
    </li>
  )
}

export default FactItem
