import { SkillItemProps } from './types'

function SkillItem({ skill }: SkillItemProps) {
  return (
    <li className="md:text-xl text-lg before:content-['<'] before:text-accent after:content-['/>'] after:text-accent">
      {skill + ' '}
    </li>
  )
}

export default SkillItem
