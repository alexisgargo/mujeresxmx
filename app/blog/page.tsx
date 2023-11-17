import Terms from "@/app/components/Terms";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import React from "react";

export const metadata = {
	title: "Blog",
	description: "Mujeres por México en Chihuahua, A.C.",
};

interface BlogCardProps {
	image: string;
	title: string;
	href: string;
}

const BlogCard = (props: BlogCardProps) => {
	return (
		<div className='w-full pb-6 text-center '>
			<a href={`/blog/blog-pages/${props.href}`}>
				<div className='flex justify-center items-center'>
					<div className='xl:w-96 relative xl:h-72 mb-4 w-[200px] h-[150px]'>
						<Image
							src={`/Image/${props.image}`}
							alt={props.title}
							fill={true}
							className='rounded-3xl'
							sizes='100%'
						/>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='w-5/6 lg:text-2xl text-xl font-semibold'>
						{props.title}
					</div>
				</div>
			</a>
		</div>
	);
};

export default function Testimonials() {
	const blogCards = [
		// {
		// 	image: "nombre-de-la-imagen.jpeg",
		// 	title: "Título de la publicación",
		// 	href: "carpeta-de-la-publicacion",
		// },
		{
			image: "10ce0bdfec1780ef49f055d88489deb8.jpeg",
			title: "Tipos de violencia y como identificarlas",
			href: "tipos-de-violencia",
		},
		{
			image: "48541d2bb64b1f0d7fc4168ed3739e9c.jpeg",
			title: "¿Qué es el feminismo? Mitos y Verdades",
			href: "que-es-el-feminismo",
		},
		{
			image: "1572347985879IgualdadEstandar.jpeg",
			title: "¿Qué es la igualdad de género?",
			href: "que-es-la-igualdad-de-genero",
		},
		{
			image: "78598bc2099ead6387dad9fbd0d5b427.jpeg",
			title: "Medidas de prevención ante la violencia",
			href: "medidas-de-prevencion",
		},
		{
			image: "171bd3fd80ac8a4a97ff05f307149c7e.jpeg",
			title: "¿Cuáles son mis derechos? ¿Cómo los protejo?",
			href: "cuales-son-mis-derechos",
		},
		{
			image: "por-qué-es-importante-la-dignidad.jpeg",
			title: "¿Qué es la dignidad humana?",
			href: "que-es-la-dignidad-humana",
		},
	];

	return (
		<main className='flex min-h-screen  flex-col items-center'>
			<Navbar />
			<div className='flex items-center justify-center h-fit'>
				<div className='flex flex-col items-center gap-5 px-24 pb-12 md:p-24 pt-245'>
					<p className='font-semibold text-6xl text-primary text-center'>
						Blog Educativo
					</p>
					<p className='text-gray-400 text-center'>
						Creamos este espacio para compartirle información que es sumamente
						importante conocer.
					</p>
				</div>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 w-screen  md:w-5/6 mb-7 '>
				{blogCards.map((card) => (
					<BlogCard image={card.image} title={card.title} key={card.title} href={card.href}/>
				))}
			</div>
			<Terms />
		</main>
	);
}
