import HeadLine from "./HeadLine";
import ViewMore from "./ViewMore";
import "./AboutUs.css";

export default function AboutUs() {
  const firstColumnText =
    "Le invitamos a estar al corriente de nuestras novedades y no perderse ningun detalle de nuestras presentaciones, giras, talleres, etc.".toLocaleUpperCase();

  return (
    <div className="aboutSection section_padding">
      <HeadLine
        title={"02_ABOUT US"}
        orangeTitle={"OTROLADO DC"}
        buttonColor={"black"}
        buttonText={"READ MORE"}
        phrase={
          "Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc. Sea parte de nuestro universo a cada instante."
        }
        shadowText={"02_"}
        shadowColor={"rgba(0, 0, 0, 0.15)"}
      />
      {screen.width <= 400 ? (
        <div className="sectionTwo">
          <div className="firstColumn">
            <figure className="firstFigure"></figure>
            <figure className="secondFigure"></figure>
          </div>
          <div className="secondColumn">
            <div className="grid">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square table">
                <ViewMore color={"black"} text={"OUR TEAM"} />
              </div>
            </div>
            <p>{firstColumnText}</p>
            <ViewMore color={"black"} text={"READ MORE"} />
          </div>
        </div>
      ) : (
        <div className="sectionTwo">
          <div className="firstColumn">
            <figure></figure>
            <p>{firstColumnText}</p>
            <ViewMore color={"black"} text={"READ MORE"} />
          </div>
          <div className="secondColumn">
            <figure></figure>
            <div className="grid">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square table">
                <ViewMore color={"black"} text={"OUR TEAM"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* <div className="sectionTwo">
        <div className="firstColumn">
          <figure></figure>
          <p>{firstColumnText}</p>
          <ViewMore color={"black"} text={"READ MORE"} />
        </div>
        <div className="secondColumn">
          <figure></figure>
          <div className="grid">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square table">
              <ViewMore color={"black"} text={"OUR TEAM"} />
            </div>
          </div>
        </div>
      </div> */
