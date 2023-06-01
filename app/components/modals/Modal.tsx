"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import Button from "../Button";

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	actionLabel,
	footer,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}

		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose, disabled]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}

		onSubmit();
	}, [onSubmit, disabled]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}

		secondaryAction();
	}, [secondaryAction, disabled]);

	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-secondary/80'>
				<div className='relative w-full md:w-1/2 xl:w-2/5 my-6 mx-auto h-full md:h-auto'>
					{/*content*/}
					<div
						className={`translate duration-300 h-full ${
							showModal
								? "translate-y-0 opacity-100"
								: "translate-y-full opacity-0"
						}`}
					>
						<div className='translate h-full md:h-auto border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
							{/*header*/}
							<div className='flex items-center p-6 rounded-t-3xl justify-center border-2 relative'>
								<button className='p-3 border-0 transition absolute left-8 hover:bg-slate-300/80 rounded-full'>
									<FiX size={18} onClick={handleClose} />
								</button>
								<div className='text-lg font-semibold'>{title}</div>
							</div>
							{/*body*/}
							<div className='relative flex-auto p-6'>{body}</div>
							{/*footer*/}
							<div className='flex flex-col gap-2 p-6'>
								<div className='flex flex-row items-center gap-4 w-full'>
									{secondaryActionLabel && secondaryAction && (
										<Button
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
											disabled={disabled}
											big
										/>
									)}
									<Button
										label={actionLabel}
										onClick={handleSubmit}
										disabled={disabled}
										big
										primary
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
