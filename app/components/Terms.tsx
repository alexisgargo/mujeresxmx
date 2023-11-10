import Image from "next/image";

const Terms = () => {
	return (
		<div className='bg-secondary flex justify-between text-white  md:p-20 p-6 md:flex-row flex-col gap-y-4  w-full'>
			<div>
				<span>&#169;</span>
				Mujeres Por México CUU
			</div>
			<div>
				<ul className='overflow-hidden flex gap-4'>
					<li className='float-left mr-14'>Redes Sociales</li>
					<li>
						<a href='https://www.facebook.com/mujerespormexicocuu/'>
							<Image
								src='/Facebook.svg'
								width={24}
								height={24}
								alt='Facebook'
							/>
						</a>
					</li>
					<li>
						<a href='https://instagram.com/mujerespormexicocuu?igshid=OGQ5ZDc2ODk2ZA=='>
							<Image
								src='/Instagram.svg'
								width={24}
								height={24}
								alt='Instagram'
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Terms;
