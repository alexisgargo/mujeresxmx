"use client";

import { useRouter } from "next/navigation";
import Logo from "../Logo";
import Container from "./Container";
import MenuItem from "./MenuItem";
import ContactBar from "./ContactBar";
import Link from "next/link";

const Navbar = () => {
	const router = useRouter();

	return (
		<div className=' w-full z-10 '>
			<Container>
				<div className='flex items-center justify-between gap-3 md:gap-0 my-5'>
					<div className='flex h-full items-center px-8 gap-2'>
						<Link href='/' className='mr-3 '>
							<Logo />
						</Link>
						<div className='navbar-item opacity-0'>
							<MenuItem
								onClick={() => router.push("/sobre-nosotras")}
								label='Quiénes somos'
							/>
						</div>
						<div className='navbar-item opacity-0'>
							<MenuItem onClick={() => router.push("/blog")} label='Blog' />
						</div>
						<div className='navbar-item opacity-0'>
							<MenuItem
								onClick={() => router.push("/testimonios")}
								label='Testimonios'
							/>
						</div>
					</div>
					<div className='navbar-item opacity-0'>
						<ContactBar />
					</div>
				</div>
			</Container>

			<style jsx>{`
				@keyframes slideDown {
					0% {
						transform: translateY(-20px);
						opacity: 0;
					}
					100% {
						transform: translateY(0);
						opacity: 1;
					}
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				.fade-in {
					animation: fadeIn 1s ease-out forwards;
				}

				.navbar-item {
					animation: slideDown 1s ease-out forwards;
				}
			`}</style>
		</div>
	);
};

export default Navbar;
