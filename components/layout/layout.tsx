import React from "react"
import Header from "./header/header"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Layout
