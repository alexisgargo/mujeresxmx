"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
	width?: number;
	height?: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
	const router = useRouter();
	return (
		<Image
			src='/favicon.png'
			alt='Mujeres por Mexico'
			width={width ? width : 90}
			height={height ? height : 50}
			className='w-auto h-auto cursor-pointer'
		/>
	);
};

export default Logo;
