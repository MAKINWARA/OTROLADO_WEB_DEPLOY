import HeadLine from "./HeadLine";
import "./SupportUs.css";

export default function SupportUs() {
  return (
    <div className="support_us section_padding">
      <HeadLine
        title={"04_SUPPORT US"}
        orangeTitle={"SUBSCRIBE"}
        phrase={
          "Le invitamos a estar al corriente de nuestras novedades y no perderse ningún detalle de nuestras presentaciones, giras, talleres, eventos, oportunidades, etc. Sea parte de nuestro universo a cada instante."
        }
        shadowText={"04_"}
        shadowColor={"rgba(255, 255, 255, 0.35)"}
      />
      <form className="emailForm" action="" method="post">
        <input
          type="email"
          placeholder="Email"
          className="input_email"
          required
        />
        <input type="submit" value="SUBMIT" className="input_submit_email" />
      </form>
    </div>
  );
}
