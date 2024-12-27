import React, { useEffect, useState } from 'react';
import './Logotransition.css';
import Logo from '../../assets/logo.png';

const App = () => {
    const [shrinkLogo, setShrinkLogo] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShrinkLogo(true);
        } else {
            setShrinkLogo(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${shrinkLogo ? 'shrink' : ''}`}>
            <div className={`logo ${shrinkLogo ? 'shrink' : ''}`}>
                <img src={Logo} alt="Logo" />
            </div>
        </header>
    );
};

export default App;
