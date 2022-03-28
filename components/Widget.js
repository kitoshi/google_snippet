import LanguageText from './LanguageText'
import styles from './Widget.module.css'
import propTypes from 'prop-types'
import LanguageCode from './LanguageCode'
import { useState } from 'react'

export default function Widget(props) {
  const [active, setActive] = useState([])
  Widget.propTypes = {
    languages: propTypes.array
  }

  const languageTab = props.languages.map((item, idx) => (
    <button
      key={item}
      type='button'
      className={styles['language-button']}
    >
      {item}
    </button>
  ))

  return (
    <div className={styles.widget}>
      <section className={styles['language-tab']}>{languageTab}</section>
      <section className={styles['language-text']}>
        <LanguageText />
      </section>
      <section className={styles['language-code']}>
        <LanguageCode />
      </section>
    </div>
  )
}
