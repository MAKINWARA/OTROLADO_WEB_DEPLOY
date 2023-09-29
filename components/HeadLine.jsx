import { PropTypes } from 'prop-types'
import ViewMore from './ViewMore'
import './HeadLine.css'

export default function HeadLine({
  title,
  orangeTitle,
  buttonText,
  buttonColor,
  phrase,
  shadowText,
  shadowColor
}) {
  return (
    <article className='headLine'>
      {screen.width <= 390 ? (
        <>
          <h2>
            {title} <br /> <span className='orangeText'>{orangeTitle}</span>
          </h2>
          <strong style={{ color: shadowColor }} className='shadowText'>
            {shadowText}
          </strong>
          <p>{phrase}</p>
          {!buttonText ? null : (
            <aside>
              <ViewMore color={buttonColor} text={buttonText} />
            </aside>
          )}
        </>
      ) : (
        <>
          <h2>
            {title} <span className='orangeText'>{orangeTitle}</span>
          </h2>
          <strong style={{ color: shadowColor }} className='shadowText'>
            {shadowText}
          </strong>
          {buttonText && (
            <aside>
              <ViewMore color={buttonColor} text={buttonText} />
            </aside>
          )}
          {phrase && <p>{phrase}</p>}
        </>
      )}
    </article>
  )
}

HeadLine.propTypes = {
  title: PropTypes.string.isRequired,
  orangeTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  phrase: PropTypes.string,
  shadowText: PropTypes.string,
  shadowColor: PropTypes.string
}
