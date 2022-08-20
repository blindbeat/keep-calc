import React from 'react'
import classNames from 'classnames'
import styles from './Header.module.css'
import layoutStyles from '../layout.module.css'

const Header = () => (
  <div className={styles.wrapper}>
    <header
      className={classNames(styles.header, layoutStyles.container, 'shadow')}
    >
      <span className={styles.logo}>keep.treat</span>
      <span className="material-icons">menu</span>
    </header>
  </div>
)

export default Header
