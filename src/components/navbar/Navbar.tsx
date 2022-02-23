import { FC } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';
import Logo from '/public/assets/images/Logo.svg';

const Navbar: FC = () => {
	return (
		<div>
			<div>
				<div>
					<Image src={Logo} alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
