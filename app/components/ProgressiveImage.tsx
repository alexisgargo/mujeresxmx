"use client";

import Image from "next/image";
import { useState } from "react";

interface ProgressiveImageProps {
	lowResSrc: string;
	highResSrc: string;
	alt: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = (
	{
		// lowResSrc,
		// highResSrc,
		// alt,
	}
) => {
	// const [highResImageLoaded, setHighResImageLoaded] = useState(false);

	return (
		<div className='flex items-center justify-center md:justify-start lg:h-fill lg:w-1/2 '>
			{/* <Image
				src={lowResSrc}
				alt={alt}
				width={700}
				height={700}
				priority
				style={{
					filter: highResImageLoaded ? "none" : "blur(20px)",
					transition: "1s filter linear",
				}}
				className={`hidden md:block ${highResImageLoaded ? "hidden" : ""}}`}
			/>
			<Image
				src={highResSrc}
				alt={alt}
				width={700}
				height={700}
				onLoad={() => setHighResImageLoaded(true)}
				className='hidden md:block'
			/> */}
			<Image
				src='/Container.svg'
				height={700}
				width={700}
				alt='Mosaico'
				priority
				className='hidden md:block'
			/>
		</div>
	);
};

export default ProgressiveImage;
