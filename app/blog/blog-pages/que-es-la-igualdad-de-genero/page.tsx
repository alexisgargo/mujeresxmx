import Blog from "@/app/components/blog/entry";

export const metadata = {
  title: "Blog",
  description: "Mujeres por México en Chihuahua, A.C.",
};

const entry = {
  image: "1572347985879IgualdadEstandar.jpeg",
  title: "¿Qué es la igualdad de género?",
  text: (
    <div>
      <p>
        La igualdad de género, para UNICEF, significa que mujeres, hombres,
        niñas y niños deban gozar, por igual, de los mismos derechos, recursos,
        oportunidades y protecciones. La igualdad entre mujeres y hombres es un
        asunto de derechos humanos y un requisito para la justicia social. Es
        esencial y fundamental para la igualdad entre todas las personas, el
        desarrollo y el progreso de la sociedad.
      </p>
    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
