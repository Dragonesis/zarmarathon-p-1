import React from 'react'
import cn from 'classnames'

import styles from './app.modules.scss'
import './color.css'

console.log(styles)


const App = () => {
  return (
    <div className={cn(styles.h1 , 'color')}>
      This test text
    </div>
  )
}

export default App
