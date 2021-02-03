import React, { useMemo, useState } from 'react'
import styles from './LanguageSwitch.module.scss'

const LanguageSwitch = () => {
  const locales = useMemo(() => ['en', 'ru', 'ua'], [])
  const [index, setIndex] = useState(0)

  const clickHandler = () => {
    setIndex(index < locales.length - 1 ? index + 1 : 0)
  }

  return (
    <button onClick={clickHandler} className={styles.changeLocaleButton}>
      {locales[index]}
    </button>
  )
}

export default LanguageSwitch
