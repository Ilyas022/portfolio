import cn from 'classnames'
import { Link } from 'react-router-dom'
import { EducationItemProps } from './types'

function EducationItem({ institution, link, period, spec }: EducationItemProps) {
  return (
    <li className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5 [&:not(:last-child)]:pb-8 md:[&:not(:last-child)]:pb-10 [&:not(:last-child)]:border-b border-solid border-text dark:border-textDark">
      <p className="font-poppins font-medium">{period}</p>
      <div>
        {Array.isArray(spec) ? (
          spec.map((spec, i) => (
            <p key={i} className={cn(i === 0 && 'mb-2')}>
              {spec}
            </p>
          ))
        ) : (
          <p>{spec}</p>
        )}
      </div>
      <p>
        <Link
          className="font-poppins font-medium hover:text-accent hover:border-accent duration-500 border-b border-text dark:border-textDark"
          to={link}
          target="_blank"
        >
          {institution}
        </Link>
      </p>
    </li>
  )
}

export default EducationItem
