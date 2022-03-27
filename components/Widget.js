import InstallText from './Information'
import styles from './Widget.module.css'
import propTypes from 'prop-types'

export default function Widget(props) {
  Widget.propTypes = {
    languages: propTypes.array
  }

  const languageTab = props.languages.map((item) => (
    <tab key={item}>{item}</tab>
  ))

  return (
    <div className={styles.Widget}>
      <section>{languageTab}</section>
      <InstallText />
    </div>
  )
}
