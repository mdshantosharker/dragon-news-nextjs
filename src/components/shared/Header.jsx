import React from 'react';
import headerLogo from '../../assets/logo.png'
import Image from 'next/image';
const Header = () => {
    return (
        <div>
            Header
            <Image src={headerLogo} alt='logo'></Image>
            
        </div>
    );
};

export default Header;