import Blog from "@/app/components/blog/entry";

export const metadata = {
  title: "Blog",
  description: "Mujeres por México en Chihuahua, A.C.",
};

const entry = {
  image: "por-qué-es-importante-la-dignidad.jpeg",
  title: "¿Qué es la dignidad humana?",
  text: (
    <div>
      <p>
        La dignidad humana es un valor inherente que todos los seres humanos
        poseen desde su nacimiento. Esta dignidad se refleja en la garantía de
        los derechos fundamentales, que abarcan aspectos culturales, sociales y
        económicos
      </p>
    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
