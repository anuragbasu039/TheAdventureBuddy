// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from "../../components/Navbar/Navbar.jsx";
import Logotransition from '../../components/Logotransition/Logotransition.jsx'
import Header from '../../components/Header/Header.jsx'
import HeroSection from '../../components/Herosection/Herosection'
import Count from '../../components/Count/Count.jsx'
import ActivitiesSection from '../../components/Activities/Activitiessection.jsx'
import Safety from '../../components/Safety/Safety.jsx'
import AdventureStart from '../../components/Adventurestart/Adventurestart.jsx'
import AdventureSection from '../../components/Adventuresection/Adventuresection.jsx'
import NewsSection from '../../components/Newsection/Newsection.jsx'
import Testimonial from '../../components/Testimonial/Testimonial.jsx'
import BrandSlider from '../../components/Brandslider/Brandslider.jsx'
import Footer from '../../components/Footer/Footer.jsx'
function Home() {
    return (
        <div>
            {/*<Navbar/>*/}
            {/* <Logotransition /> */}
            <Header />
            <HeroSection />
            <Count />
            <ActivitiesSection />
            <Safety />
            <AdventureStart />
            <AdventureSection />
            {/*<NewsSection />*/}
            <Testimonial />
            <BrandSlider />
            <Footer />
        </div>
    )
}

export default Home