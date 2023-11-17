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
      <ul className="indent-10">
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
        <li>Derecho a la privacidad</li>
        <li>Derecho al trabajo y condiciones laborales justas</li>
      </ul>
      <br />
      <p className="md:text-xl text-gray-900">
        Estos son algunos derechos humanos, si tienes mas dudas puedes contactarnos y las resolveremos.
        <br />
        <br />
        Para proteger los derechos primero se debe de estar bien informado respecto a ellos, tener documentos que respalden tus derechos, en cada de ser violados, tomar medidas y denunciar en organizaciones defensoras de derechos humanos.
      </p>
    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
