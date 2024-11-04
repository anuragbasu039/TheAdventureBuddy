// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Logotransition.css';
import Logo from '../../assets/logo.png';
import Header from '../Header/Header';
const App = () => {
    const [shrinkLogo, setShrinkLogo] = useState(false);
    const [hideLogo, setHideLogo] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShrinkLogo(true);
            setHideLogo(true);
        } else {
            setShrinkLogo(false);
            setHideLogo(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div>
            <header className="header">
                <div className={`logo ${shrinkLogo ? 'shrink' : ''} ${hideLogo ? 'hide' : ''}`}>
                    <img src={Logo} alt="Logo" />
                </div>
            </header>
        </div>
        {/* <Header /> */}
        </>
    );
};

export default App;
