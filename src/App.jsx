// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar.jsx';
import { AuthProvider } from './components/ContextAuth/AuthContext';
// import RegistrationForm from './Pages/Registration/Registration.jsx';
const About = lazy(() => import('./Pages/About/About.jsx'));
const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const Contact = lazy(() => import('./Pages/Contact/Contact.jsx'));
const Advanceactivities = lazy(() => import('./components/Adventureactivites/Adventureactivities.jsx'));
const Masterpioneer = lazy(() => import('./Pages/Masterpioneer/Masterpioneer.jsx'));
const SafetySection = lazy(() => import('./Pages/Safetypage/Safetypage.jsx'));
// const Register = lazy(() => import('./Pages/StudentRegister/RegisterForm.jsx'));
// const CheckFrom = lazy(() => import('./Pages/Checkform/Checkform.jsx'));
const Nanitalpage = lazy(() => import('./components/Nanitalpage/Nanitalpage.jsx'));
const Manalipage = lazy(() => import('./components/ManaliPage/ManaliPage.jsx'));
const Risewenderer = lazy(() => import('./Pages/Risingwanderer/Risingwanderer.jsx'));
const Shimlapage = lazy(() => import('./components/Shimla/Shimla.jsx'));
// const LoginPages = lazy(() => import('./Pages/Login/LoginPage.jsx'));
const Signup = lazy(() => import('./Pages/Signup/SignupPage.jsx'));
const Login = lazy(() => import('./Pages/Login/Login.jsx'));
// const Registration = lazy(() => import('./Pages/Registration/Registration.jsx'));

function App() {
    return (
        <AuthProvider>
            <Router>
                {/*<Navbar />*/}
                {/*<Suspense fallback={<p>Loading...</p>}>*/}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/activities/master" element={<Masterpioneer />} />
                        <Route path="/activities/adventureactivities" element={<Advanceactivities />} />
                        <Route path="/safety" element={<SafetySection />} />
                        {/*<Route path="/register" element={<RegistrationForm />} />*/}
                        {/* <Route path="/form" element={<Registration/>}/> */}
                        {/*<Route path="/checkform" element={<CheckFrom />} />*/}
                        <Route path="/nanital" element={<Nanitalpage />} />
                        <Route path="/manali" element={<Manalipage />} />
                        <Route path="/shimla" element={<Shimlapage />} />
                        <Route path="/activities/rising" element={<Risewenderer />} />
                        <Route path="/signup" element={<Signup />} />
                         {/*<Route path="/signups" element={<LoginPages />} />*/}
                         <Route path="/login" element={<Login/>}/>
                    </Routes>
            {/*</Suspense>*/}
            </Router>
        </AuthProvider>
    );
}

export default App;
