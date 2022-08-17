import React from 'react'
import Header from './header/Header'
import styles from './layout.module.css'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div>
    <Header />
    <main className={styles.container}>{children}</main>
  </div>
)

export default Layout
