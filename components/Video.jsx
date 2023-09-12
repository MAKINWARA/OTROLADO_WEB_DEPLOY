import "./Video.css";
import ViewMore from "./ViewMore";

export default function Video() {
  return (
    <div className="videoContainer">
      <span className="textMargin">
        <h3>NEW SEASON</h3>
        <h2 className="orangeText">
          MONDRIAN <br /> DANCE
        </h2>
        <ViewMore text={"VIEW MORE"} />
      </span>
    </div>
  );
}
