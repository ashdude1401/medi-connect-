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
import UserProfile from './components/ProfilePage/UserProfile';
import Procedure from './components/Procedure';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<><Hero/> <About/> <Procedure/> <Contact /></>} />
          <Route path="/signupOrg" exact element={<SignupOrg />} />
          <Route path="/signup" exact element={<SignupUser />}/>
          <Route path="/login" exact element={<Login />} />
          <Route path="/userProfile" exact element={<UserProfile />} />
          
        </Routes>
        {/* <Footer /> */}
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
    </>
  )
}
