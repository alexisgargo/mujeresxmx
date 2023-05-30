import ContactButton from "../ContactButton";
import MenuItem from "./MenuItem";

const ContactBar = () => {
	return (
		<div className='flex h-full items-center px-8  gap-x-3'>
			<MenuItem onClick={() => {}} label='Conoce tu caso' />
			<ContactButton />
		</div>
	);
};

export default ContactBar;
