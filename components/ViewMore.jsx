import { PropTypes } from "prop-types";
import arrow from "../src/assets/arrow.svg";
import "./ViewMore.css";

export default function ViewMore({ text, color }) {
  return (
    <button style={(color = { color })} className="viewMore">
      <p>{text}</p>
      <img src={arrow} alt="arrow" />
    </button>
  );
}

ViewMore.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
