import Blog from "@/app/components/blog/entry";

export const metadata = {
  title: "Blog",
  description: "Mujeres por México en Chihuahua, A.C.",
};

const entry = {
  image: "48541d2bb64b1f0d7fc4168ed3739e9c.jpeg",
  title: "¿Qué es el feminismo? Mitos y Verdades",
  text: (
    <div>
      <p>
        El feminismo es un movimiento social y político que comenzó formalmente
        a finales del siglo XVIII, aunque en ese momento no tenía ese nombre.
        Este movimiento implica que las mujeres se den cuenta de que son un
        grupo humano que ha sido oprimido, dominado y explotado por los hombres
        en el contexto del patriarcado a lo largo de diferentes etapas
        históricas y modelos de producción. Este reconocimiento motiva a las
        mujeres a tomar medidas para liberarse y, en el proceso, transformar la
        sociedad de acuerdo a las necesidades de esa liberación.
      </p>
      <br />
      <b>Mitos y verdades:</b>
      <br />
      <ul className="list-disc list-inside">
        <li>
          <b>El feminismo es lo opuesto al machismo:</b> El machismo defiende la
          idea de que los hombres deben estar por encima de las mujeres. En
          cambio, el feminismo no busca que las mujeres estén por encima de los
          hombres, sino que ambos tengan las mismas oportunidades y derechos.
        </li>
        <li>
          <b>El feminismo odia a los hombres:</b> El feminismo rechaza la idea
          de que todos los hombres sean inherentemente violentos y argumenta que
          su comportamiento puede ser influenciado por la socialización en lugar
          de la naturaleza. Además, el feminismo promueve la idea de que los
          hombres tienen derecho a expresar sus emociones y liberarse de las
          presiones impuestas por el sistema patriarcal.
        </li>
        <li>
          <b>Solo las mujeres pueden ser feminista:</b> Aunque las mujeres
          lideran el movimiento feminista, la búsqueda de igualdad para todas
          las personas involucra a toda la sociedad, lo que significa que el
          género no se convierte en una condición excluyente.
        </li>
        <li>
          <b>Todas las mujeres feministas están a favor del aborto:</b> El
          feminismo no tiene como objetivo promover el aborto en sí, sino que se
          centra en empoderar a las mujeres y en defender su libertad para tomar
          decisiones sobre su cuerpo y la maternidad.
        </li>
      </ul>
    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
