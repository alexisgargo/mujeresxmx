import { useRouter } from "next/navigation";
import MenuItem from "./MenuItem";
import Button from "../Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const ContactBar = () => {
	const router = useRouter();
	const RegisterModal = useRegisterModal();

	return (
		<div className='flex h-full items-center px-8  gap-x-3'>
			<MenuItem onClick={RegisterModal.onOpen} label='Conoce tu caso' />
			<Button label='Contáctanos' disabled primary={true} />
		</div>
	);
};

export default ContactBar;
