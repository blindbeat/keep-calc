import { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import styles from './button.module.css'

const Button = ({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<'button'>) => (
  <button className={classNames(styles.button, className)} {...rest}>
    {children}
  </button>
)

export default Button
