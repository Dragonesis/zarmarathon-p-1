import React, { FC, useState, useEffect } from 'react'
import cc from 'classnames'
import { useLocation } from 'react-router-dom'
import { Header, Footer } from '../../components/base'
import routes from '../../router'

import s from './s.module.scss'

const Default: FC = ({ children }) => {
  const { pathname } = useLocation()
  const [theme, setTheme] = useState(s.white)

  useEffect(() => {
    const layoutTheme = routes.find(({ path }) => path === pathname)?.layoutTheme || s.white
    // TODO Fix the problem with working with dynamic styles
    setTheme(s[layoutTheme])
  }, [pathname])

  const bgColor = theme

  return (
    <div className={cc(s.core, bgColor)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Default
