"use client";

interface MenuItemProps {
	onClick: () => void;
	label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
	return (
		<div
			onClick={onClick}
			className='transition duration-500 p-4 rounded-full hover:cursor-pointer font-medium text-slate-500 hover:bg-slate-400 hover:bg-opacity-30 h-full px-3 flex items-center'
		>
			{label}
		</div>
	);
};

export default MenuItem;
