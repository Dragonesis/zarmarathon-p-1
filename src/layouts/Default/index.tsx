import React, { FC, useState, useEffect } from 'react'
import { usePath } from 'hookrouter'
import cc from 'classnames'
import { Header, Footer } from '../../components/base'
import { GENERAL_MENU } from '../../router/index'

import s from './s.module.scss'

const Default: FC = ({ children }) => {
  const currentPath = usePath()
  const [theme, setTheme] = useState(s.white)

  useEffect(() => {
    const layoutTheme = GENERAL_MENU.find(({ path }) => path === currentPath)?.layoutTheme || s.white
    setTheme(s[layoutTheme as keyof typeof s])
  }, [currentPath])

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
