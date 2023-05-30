import Link from "next/link";

function ContactButton() {
	return (
		<Link href='/sobre-nosotras' className='w-fit'>
			<button className='bg-primary border-primary text-white rounded-full py-2 px-5 w-fit transition hover:bg-transparent duration-300 hover:text-primary hover:border-white  border-2'>
				Conocer más
			</button>
		</Link>
	);
}

export default ContactButton;
