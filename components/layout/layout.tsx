import React from 'react'
import classNames from 'classnames'
import styles from './layout.module.css'
import Header from './header'

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
