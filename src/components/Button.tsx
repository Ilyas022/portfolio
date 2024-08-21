interface IButton {
  text: string
  color?: 'accent' | 'transparent'
}

const Button: React.FC<IButton> = ({ text, color = 'transparent' }: IButton): JSX.Element => {
  const colorVariants = {
    accent:
      'bg-accent relative before:absolute before:top-0 before:right-0 before:bg-gradient-to-b before:from-primary/50 before:to-accent before:block before:w-0 before:h-full hover:before:w-full hover:before:left-0 before:duration-500 before:rounded-md',
    transparent:
      'bg-transparent relative before:absolute before:top-0 before:right-0 before:bg-gradient-to-b before:from-primary before:to-accent before:block before:w-0 before:h-full hover:before:w-full hover:before:left-0 before:duration-500 border border-text dark:border-textDark border-solid before:rounded-md',
  }

  return (
    <button
      className={`${colorVariants[color]} text-lg min-[800px]:text-xl font-ubuntu font-medium px-6 py-3 rounded-md`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  )
}

export default Button
