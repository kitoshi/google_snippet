import CopySVG from './svg/copy_svg'
import { useState } from 'react'
import styles from './Widget.module.css'

export default function LanguageCode() {
  const [copy, setCopy] = useState(false)

  function handleCopyButton() {
    //swap between svg and text, after timer go back to default
    if (copy) {
      setCopy(false)
    } else {
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      }, 5000)
    }
  }
  const codeBlock = 'Install-Package Google.Apis'
  return (
    <>
      <code>{codeBlock}</code>
      <button
        type='button'
        className={styles.copy}
        onClick={() => {
          navigator.clipboard.writeText(`${codeBlock}`), handleCopyButton()
        }}
        disabled={copy ? true : false}
      >
        <CopySVG />
      </button>
      <div
        className={styles.alert}
        style={copy ? { display: 'flex' } : { display: 'none' }}
      >
        <p>Copied to Clipboard!</p>
      </div>
    </>
  )
}
