"use client";

interface ButtonProps {
	label: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	primary?: boolean;
	big?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	primary,
	big,
}) => {
	return (
		<button
			className={` py-2 px-5 transition duration-300  border-2 ${
				primary
					? "bg-primary border-primary text-white hover:bg-transparent hover:border-primary hover:text-secondary"
					: "bg-primary border-primary text-white hover:bg-transparent hover:text-primary hover:border-white"
			} ${big ? "w-full rounded-xl" : " w-fit rounded-full"}`}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default Button;
