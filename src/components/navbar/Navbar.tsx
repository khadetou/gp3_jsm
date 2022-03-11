import { FC } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';
import Logo from '/public/assets/images/Logo.svg';

const Navbar: FC = () => {
	const navbarItems = [
		{
			title: "Home",
			href: "#home"
		},
		{
			title: "What is GPT3?",
			href: "#home"
		},
		{
			title: "Open AI",
			href: "#home"
		},
		{
			title: "Case Studies",
			href: "#home"
		},
		{
			title: "Library",
			href: "#home"
		}
	];

	return (
		<div className="flex justify-between items-center py-8 px-24 ">
			<div className='flex-1 flex justify-start items-center'>
				<div className='mr-8'>
					<Image src={Logo} width={63} height={16} alt="logo" />
				</div>
				<div className="flex flex-row">
					{
					navbarItems.map(({title, href}, key) => 
				(	<p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer" key={key}>
						<a href={href}>{title}</a>
					</p>))
					}

				</div>
			</div>
		</div>
	);
};

export default Navbar;
