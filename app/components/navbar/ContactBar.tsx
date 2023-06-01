import { useRouter } from "next/navigation";
import MenuItem from "./MenuItem";
import Button from "../Button";

const ContactBar = () => {
	const router = useRouter();

	return (
		<div className='flex h-full items-center px-8  gap-x-3'>
			<MenuItem onClick={() => {}} label='Conoce tu caso' />
			<Button label='Contáctanos' disabled primary={true} />
		</div>
	);
};

export default ContactBar;
