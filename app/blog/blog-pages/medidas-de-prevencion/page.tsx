import Blog from "@/app/components/blog/entry";

export const metadata = {
  title: "Blog",
  description: "Mujeres por México en Chihuahua, A.C.",
};

const entry = {
  image: "78598bc2099ead6387dad9fbd0d5b427.jpeg",
  title: "Medidas de prevención ante la violencia",
  text: (
    <div>
      <ol className="list-decimal">
        <li>Escucha y cree a las sobrevivientes</li>
        <li>Enseñanza a nuevas generaciones</li>
        <li>Exige respuesta y servicios</li>
      </ol>
    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
