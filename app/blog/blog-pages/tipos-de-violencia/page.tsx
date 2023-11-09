import Terms from "@/app/components/Terms";
import Navbar from "@/app/components/navbar/Navbar";
import Image from "next/image";

export const metadata = {
    title: "Blog",
    description: "Mujeres por México en Chihuahua, A.C.",
};


export default function Blog() {
    const entry = {
        image: "10ce0bdfec1780ef49f055d88489deb.jpg",
        title: "Tipos de violencia y como identificarlas",
        text: 
            <div>
                <p><b>Como identificarlos?</b> Usualmente  las situaciones de maltrato siguen un mismo patrón, conocido como el Ciclo de la Violencia (Walker, 1979), el cual diferencia 3 fases que tienen un carácter cíclico:</p>
                <ul className="list-disc list-inside">
                    <li>Fase 1: Acumulación de la tensión.</li>
                    <li>Fase 2: Explosión o agresión.</li>
                    <li>Fase 3: Recocilacion</li>
                </ul>
                <br />
                <b>Tipos de violencia:</b><br />
                <ul className="list-disc list-inside">
                    <li><b>Física:</b> son todas las agresiones que atentan contra el cuerpo de una persona, ya sea a través de golpes, lanzamiento de objetos, encierro, sacudidas o estrujones, entre otras conductas que puedan ocasionar daños físicos.</li>
                    <li><b>Psicologica y emocional:</b> Se refiere a cualquier acción o falta de acción con el propósito de degradar o influir en las acciones, comportamientos, creencias y decisiones de otras personas a través de tácticas como intimidación, manipulación, amenazas, humillación, aislamiento o cualquier comportamiento que cause daño a la salud mental. Este tipo de violencia es bastante común y a menudo se acepta como parte de la sociedad, por lo que es esencial aprender a identificarla y denunciarla.</li>
                    <li><b>Sexual:</b> se abarcan todas las situaciones en las que una persona se ve involucrada en relaciones sexuales, comportamientos físicos o interacciones verbales de forma no consentida ni deseada por la otra parte. Esta violencia sexual puede dirigirse a hombres o mujeres y se puede llevar a cabo mediante el uso de la fuerza, la coerción física, la coerción psicológica o cualquier otro método que anule o restrinja la capacidad de elección personal de la víctima.</li>
                    <li><b>Economica:</b> implica utilizar el dinero para ejercer poder y control de manera perjudicial sobre una persona. Esto puede incluir la retención de ingresos, la prohibición de gastar dinero en beneficio propio o de la familia, y negar el acceso a recursos financieros para controlar la independencia. Todas estas acciones son consideradas delitos y están sujetas a sanciones legales.</li>
                    <li><b>De genero:</b> implica actos violentos dirigidos hacia una persona debido a su género o preferencia sexual. En muchos casos, estos actos están dirigidos a mujeres y están relacionados con la creencia de algunos hombres de tener control sobre ellas, a menudo aprovechando situaciones de vulnerabilidad, desigualdad y poder. También puede afectar a hombres que no se adhieren a las normas culturales tradicionales de masculinidad, como en casos de violencia homofóbica o cuando expresan emociones o comportamientos considerados "femeninos".</li>
                </ul>
            </div>

    };

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <Navbar />
            <div className="max-w-6xl mx-auto p-4">
                <div className="relative mb-4 w-full">
                    <Image
                        src={`/Image/${entry.image}`}
                        alt={entry.title}
                        // fill={true}
                        className='rounded-3xl mx-auto'
                        width={1000}
                        height={1000}
                    />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-center">{entry.title}</h2>
                <div className="text-lg text-gray-700 mb-4">{entry.text}</div>
            </div>
            <Terms />
        </main>

    );
}