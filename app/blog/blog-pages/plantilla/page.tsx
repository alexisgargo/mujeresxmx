import Blog from "@/app/components/blog/entry";

export const metadata = {
  title: "Blog",
  description: "Mujeres por México en Chihuahua, A.C.",
};

const entry = {
  image: "78598bc2099ead6387dad9fbd0d5b427.jpeg", // imagen de la entrada
  title: "Medidas de prevención ante la violencia", // titulo de la entrada
  
    // Contenido de la entrada
    // Usar etiquetas de HTML para dar formato al texto

  text: (
    <div>
      
      {/* Mas informacion sobre formato de texto en HTML: https://www.geeksforgeeks.org/html-text-formatting/ */}

    </div>
  ),
};

export default function page() {
  return <Blog entry={entry} />;
}
