import Blog from "@/app/components/blog/entry";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "Mujeres por México en Chihuahua, A.C.",
};

const entry = {
  image: "cdn-3.expansion.jpg",
  title: "¿Qué es la dignidad humana?",
  text: (
    <div>
      <div className="flex">
        <div className="w-1/2 pr-12">
      <p>
        La dignidad humana es un valor inherente que todos los seres humanos
        poseen desde su nacimiento. Esta dignidad se refleja en la garantía de
        los derechos fundamentales, que abarcan aspectos culturales, sociales y
        económicos
      </p>
      </div>
      <br />
      <div className="w-1/2 pr-8">
        <Image 
          src={"/Image/por-qué-es-importante-la-dignidad.jpeg"}
          alt="Igualdad de género"
          className="rounded-3xl mx-auto"
          width={500}
          height={500}
        />
      </div>
      </div>
    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
