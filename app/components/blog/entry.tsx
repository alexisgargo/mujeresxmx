import Terms from "@/app/components/Terms";
import Navbar from "@/app/components/navbar/Navbar";
import Image from "next/image";

const Blog: React.FC<{
  entry: { image: string; title: string; text: JSX.Element };
}> = ({ entry }) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <div className="relative mb-4 w-full">
          <Image
            src={`/Image/${entry.image}`}
            alt={entry.title}
            // fill={true}
            className="rounded-3xl mx-auto"
            width={1000}
            height={1000}
          />
        </div>
        <br />
        <h2 className="text-3xl font-bold mb-2 text-center">{entry.title}</h2>
        <br />
        <div className="text-lg text-gray-700 mb-4">{entry.text}</div>
      </div>
      <a
        href="/blog"
        className=" bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-2xl mb-10">
        Volver
      </a>
      <Terms />
    </main>
  );
};

export default Blog;
