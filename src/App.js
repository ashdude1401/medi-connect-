import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import SignupUser from './components/SignupUser';
import SignupOrg from './components/SignupOrg';
import MedicineForm from './components/MedicineForm';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import Profile from "./components/Profile";
import OrgProfile from "./components/OrgProfile";
import ProfilePage from './components/ProfilePage';


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<><Hero/> <About/> <Contact /></>} />
          <Route path="/signupOrg" exact element={<SignupOrg />} />
          <Route path="/signup" exact element={<SignupUser />}/>
          <Route path="/login" exact element={<Login />} />
        </Routes>
        {/* <Footer /> */}
        {/* <ProfilePage/> */}
      </Router>
      {/* <Hero />
      <About />
      <Contact /> */}
      {/* <Login /> */}
      {/* <SignupUser /> */}
      {/* <SignupOrg /> */}
      {/* <MedicineForm /> */}
      {/* <ResetPassword /> */}
      {/* <ForgotPassword /> */}
      {/* <Footer /> */}
      {/* <Profile />
      <OrgProfile /> */}
    </>
  )
}
