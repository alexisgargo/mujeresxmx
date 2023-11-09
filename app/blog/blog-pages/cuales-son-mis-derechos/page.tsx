import Blog from "@/app/components/blog/entry";

export const metadata = {
  title: "Blog",
  description: "Mujeres por México en Chihuahua, A.C.",
};

const entry = {
  image: "171bd3fd80ac8a4a97ff05f307149c7e.jpeg",
  title: "¿Cuáles son mis derechos? ¿Cómo los protejo?",
  text: (
    <div>
      <ul>
        <li>Derecho a la vida</li>
        <li>Derecho a la igualdad</li>
        <li>Derecho a la integridad y seguridad personal</li>
        <li>Derecho a la libertad de transito y residencia</li>
        <li>Derecho de acceso a la justicia</li>
        <li>Derecho a la propiedad</li>
        <li>Derecho sexuales y reproductivos</li>
        <li>Derecho de acceso a la información</li>
        <li>Derecho a la proteccion de datos personales</li>
        <li>Derecho a la ciudadanía</li>
        <li>Derecho a la educación</li>
        <li>Derecho a la salud</li>
        <li>Derecho a vivienda</li>
        <li>Derecho a la alimentación</li>
        <li>Derecho al trabajo</li>
        <li>Derecho a la seguridad social</li>
      </ul>
    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
