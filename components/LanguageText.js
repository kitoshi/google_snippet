import propTypes from 'prop-types'

export default function LanguageText(props) {
  LanguageText.propTypes = {
    language: propTypes.string
  }
  return (
    <>
      <p>
        For more information, see{' '}
        <a href=''>Setting Up a {props.language} Development Environment.</a>
      </p>
      <p>
        If you are using Visual Studio 2017 or higher, open nuget package
        manager window and type the following:
      </p>
    </>
  )
}
