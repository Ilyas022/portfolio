import cn from 'classnames'
import { BurgerButtonProps } from './types'

function BurgerButton({ isOpened, setOpened }: BurgerButtonProps) {
  const handleMenuToggle = () => {
    setOpened()
  }

  return (
    <button
      className={cn(
        'max-[800px]:block hidden relative h-[22px] w-6 z-20 opacity-70 duration-200 hover:opacity-100 before:absolute after:absolute before:w-6 after:w-6 before:h-[2px] after:h-[2px] before:bg-text after:bg-text before:dark:bg-textDark after:dark:bg-textDark before:top-0 before:left-0 after:bottom-0 after:left-0 menuBurger',
        isOpened && 'before:top-[10px] before:rotate-45 after:-rotate-45 after:bottom-[10px] active'
      )}
      onClick={handleMenuToggle}
    >
      <span
        className={cn(
          'absolute top-1/2 w-3 h-[2px] left-0 bg-text dark:bg-textDark translate-x-[6px] -translate-y-1/2',
          isOpened && 'hidden'
        )}
      />
    </button>
  )
}

export default BurgerButton
