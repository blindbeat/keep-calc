import React from 'react'
import classNames from 'classnames'
import styles from './Header.module.css'

const Header = () => (
  <header className={classNames(styles.header, 'shadow')}>
    <span className={styles.menu}>keep.treat</span>
    <span className={classNames('material-icons', styles.menu)}>menu</span>
  </header>
)

export default Header
