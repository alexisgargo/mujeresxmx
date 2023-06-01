"use client";

import Modal from "./Modal";
import axios from "axios";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			invoice: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post("/api/register", data)
			.then((res) => {
				registerModal.onClose();
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Modal
			isOpen={registerModal.isOpen}
			title='Registro'
			actionLabel='Seguir'
			disabled={isLoading}
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
		/>
	);
};

export default RegisterModal;
