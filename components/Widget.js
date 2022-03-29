import LanguageText from './LanguageText'
import styles from './Widget.module.css'
import propTypes from 'prop-types'
import LanguageCode from './LanguageCode'
import { useState, useEffect } from 'react'

export default function Widget(props) {
  const [defaultLanguageTab, setDefaultLanguageTab] = useState([])
  const [results, setResults] = useState([])
  const [resultsLanguageTab, setResultsLanguageTab] = useState([])
  const [activeResult, setActiveResult] = useState('Bash')

  Widget.propTypes = {
    languages: propTypes.array
  }

  useEffect(() => {
    //pulls in the default button array from props on load
    //sets active information section to default or next pressed item

    let defaultButtonArray = props.languages.map((item, idx) => (
      <button
        key={item}
        type='button'
        onClick={handleActiveButtonResult}
        className={
          activeResult === item
            ? `${styles['language-button']} ${styles['active']}`
            : styles['language-button']
        }
      >
        {item}
      </button>
    ))
    setDefaultLanguageTab(defaultButtonArray)
  }, [props.languages, activeResult])

  useEffect(() => {
    function updateResultsLanguageTab() {
      //updates tab array with search input
      let tabArr = []
      for (const item of results) {
        tabArr.push(defaultLanguageTab[item])
      }
      if (results.length === 0) {
        setResultsLanguageTab([])
      } else if (results.length === 1) {
        //if search array is one, set it to active
        setResultsLanguageTab(tabArr)
        handleActiveResult(tabArr[0].key)
      } else {
        setResultsLanguageTab(tabArr)
      }
    }
    updateResultsLanguageTab()
  }, [results, defaultLanguageTab])

  function handleResultsInput(e) {
    //handles input, strips special characters
    let matches = []
    for (const [idx, element] of props.languages.entries()) {
      let input = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
      let regex = new RegExp(input, 'gi')
      if (element.match(regex) !== null) {
        matches.push(idx)
      }
    }
    setResults(matches)
    if (e.target.value === []) {
      setResults('')
    }
  }

  function handleActiveResult(string) {
    //handle setting from search field
    setActiveResult(string)
  }

  function handleActiveButtonResult(e) {
    //handler for button press
    setActiveResult(e.target.textContent)
  }

  return (
    <div className={styles.widget}>
      <section className={styles['language-tab']}>
        {results.length === 0
          ? defaultLanguageTab.slice(0, 5)
          : resultsLanguageTab}
        <input
          type='search'
          placeholder={'Search 20+ Languages'}
          onInput={(e) => handleResultsInput(e)}
        ></input>
      </section>
      <section className={styles['language-text']}>
        <LanguageText language={activeResult} />
      </section>
      <section className={styles['language-code']}>
        <LanguageCode />
      </section>
    </div>
  )
}
