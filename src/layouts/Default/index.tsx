import React from 'react'
import cc from 'classnames'
import { Header, Footer } from '../../components/base'

import s from './s.module.scss'

// TODO Replace with dynamic definition
const THEME = 'color'

const Default = () => {
  return (
    <div className={cc(s.core, s[THEME])}>
      <Header />
      <main className="main">
        <div>This test text</div>
      </main>
      <Footer />
    </div>
  )
}

export default Default
