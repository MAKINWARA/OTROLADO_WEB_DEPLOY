import { PropTypes } from "prop-types";
import ViewMore from "./ViewMore";
import "./HeadLine.css";

export default function HeadLine({
  title,
  orangeTitle,
  buttonText,
  buttonColor,
  phrase,
  shadowText,
  shadowColor,
}) {
  return (
    <article className="headLine">
      {screen.width <= 375 ? (
        <>
          <h2>
            {title} <br /> <span className="orangeText">{orangeTitle}</span>
          </h2>
          <strong style={{ color: shadowColor }} className="shadowText">
            {shadowText}
          </strong>
          <p>{phrase}</p>
          <aside>
            <ViewMore color={buttonColor} text={buttonText} />
          </aside>
        </>
      ) : (
        <>
          <h2>
            {title} <span className="orangeText">{orangeTitle}</span>
          </h2>
          <strong style={{ color: shadowColor }} className="shadowText">
            {shadowText}
          </strong>
          <aside>
            <ViewMore color={buttonColor} text={buttonText} />
          </aside>
          <p>{phrase}</p>
        </>
      )}
    </article>
  );
}

HeadLine.propTypes = {
  title: PropTypes.string.isRequired,
  orangeTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  shadowText: PropTypes.string,
  shadowColor: PropTypes.string,
};
