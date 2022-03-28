import LanguageText from './LanguageText'
import styles from './Widget.module.css'
import propTypes from 'prop-types'
import LanguageCode from './LanguageCode'
import { useState } from 'react'

export default function Widget(props) {
  const [results, setResults] = useState('')
  Widget.propTypes = {
    languages: propTypes.array
  }

  const languageTab = props.languages.map((item, idx) => (
    <button key={item} type='button' className={styles['language-button']}>
      {item}
    </button>
  ))

  function handleResultsInput(e) {
    let matches = []
    for (const [idx, element] of props.languages.entries()) {
      let input = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
      let regex = new RegExp(input, 'gi')
      if (element.match(regex) !== null) {
        matches.push(idx)
      }
    }
    setResults(matches)
  }

  return (
    <div className={styles.widget}>
      <section className={styles['language-tab']}>
        {results === '' ? languageTab.slice(0, 6) : languageTab[results[0]]}
        <input
          type='search'
          placeholder={'Search 20+ Languages'}
          onInput={handleResultsInput}
        ></input>
      </section>
      <section className={styles['language-text']}>
        <LanguageText />
      </section>
      <section className={styles['language-code']}>
        <LanguageCode />
      </section>
    </div>
  )
}
