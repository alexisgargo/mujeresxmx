import Blog from "@/app/components/blog/entry";
import Image from "next/image";

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
      <div className="w-full">
        <Image 
          src={"/Image/ana_garnelo_no_discriminacion-scaled.jpg"}
          alt="Igualdad de género"
          className="rounded-3xl mx-auto"
          width={500}
          height={500}
        />
      </div>
    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
