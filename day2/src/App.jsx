import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import UserSignUp from './components/UserSignUp';
import AdminSignUp from './components/AdminSignUp';
import Userdashboard from './components/Userdashboard';
import Userdata from './components/Userdata';
import AdminDashboard from './components/Admindashboard';
import Admindata from './components/Admindata';

const OtherComponents = () => (
  <div className='overflow-hidden'>
    <Hero />
    <Cards />
    <Facts />
    <Features />
    <Courses />
    <Pricing />
    <Newsletter />
    <Contact />
    <Footer />
  </div>
);

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <Router><div className='container mx-auto'>
     <Header />
     </div>
      <Routes>
        <Route path="/" element={<OtherComponents />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/usersignup" element={<UserSignUp />} />
         <Route path = "/adminsignup" element={<AdminSignUp/>}/>
         <Route path = "/userdashboard" element={<Userdashboard/>}/>
         <Route path = "/admindashboard" element={<AdminDashboard/>}/>
         <Route path = "/userdata" element={<Userdata/>}/>
         <Route path = "/admindata" element={<Admindata/>}/>
      </Routes>
      <Newsletter />
    <Contact />
    <Footer />
    </Router>
  );
};

export default App;
