export interface AboutItemProps {
  info: string
}

function AboutItem({ info }: AboutItemProps) {
  return (
    <p className='before:content-["<"] before:text-accent after:content-["/>"] max-[800px]:text-lg after:text-accent'>
      {info + ' '}
    </p>
  )
}

export default AboutItem
