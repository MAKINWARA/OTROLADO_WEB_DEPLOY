import HeadLine from "./HeadLine";
import ViewMore from "./ViewMore";
import "./Producctions.css";

export default function Productions() {
  const galleryText =
    screen.width <= 1024 && screen.width > 390 ? "GALLERY" : "DANCE GALLERY";

  return (
    <div className="productions section_padding">
      <HeadLine
        title={"03_PRODUCTIONS"}
        orangeTitle={"LAST WORK"}
        phrase={
          "Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc. Sea parte de nuestro universo a cada instante."
        }
        buttonText={"SEE OUR LATES PRODUCCTION"}
        buttonColor={"Black"}
        shadowText={"03_"}
        shadowColor={"rgba(255, 255, 255, 0.5)"}
      />
      {screen.width <= 375 ? (
        <>
          <section className="gallery">
            <div className="photos">
              <figure className="beta one"></figure>
            </div>
            <article className="gallery_article">
              <div>
                <h3 className="gallery_h2">MONDRIAN DANCE</h3>
                <p>
                  Le invitamos a estar al corriente de nuestras novedades y no
                  perderse ningún detalle de nuestras presentaciones, giras,
                  talleres, eventos, oportunidades, etc. Sea parte de nuestro
                  universo a cada instante.
                </p>
                <ViewMore text={"VIEW ALL PRODUCTIONS"} color={"Black"} />
              </div>
            </article>
          </section>
        </>
      ) : (
        <>
          <strong>{galleryText}</strong>
          <section className="gallery">
            <div className="photos">
              <div className="photo_grid">
                <figure className="beta one"></figure>
                <figure className="beta two"></figure>
              </div>
              <div className="photo_grid_two">
                <figure className="beta three"></figure>
                <figure className="beta four"></figure>
                <figure className="beta five"></figure>
              </div>
            </div>
            <article className="gallery_article">
              <div>
                <h3 className="gallery_h2">MONDRIAN DANCE</h3>
                <p>
                  Le invitamos a estar al corriente de nuestras novedades y no
                  perderse ningún detalle de nuestras presentaciones, giras,
                  talleres, eventos, oportunidades, etc. Sea parte de nuestro
                  universo a cada instante.
                </p>
                <ViewMore text={"VIEW ALL PRODUCTIONS"} color={"Black"} />
              </div>
            </article>
          </section>
        </>
      )}
    </div>
  );
}
