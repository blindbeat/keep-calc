import React from 'react'
import classNames from 'classnames'
import Header from './header/Header'
import styles from './layout.module.css'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div>
    <Header />
    <main className={classNames(styles.container, styles.main)}>
      {children}
    </main>
  </div>
)

export default Layout
