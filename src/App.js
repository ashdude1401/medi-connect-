import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUpChoice from "./components/SignUpChoice";
import SignupUser from "./components/SignupUser";
import SignupOrg from "./components/SignupOrg";
import MedicineForm from "./components/MedicineForm";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import UserProfile from "./components/UserProfile";
import Procedure from "./components/Procedure";
import MedicineDashboard from "./components/MedicineDashboard";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Hero /> <About /> <Procedure /> <Contact />
              </>
            }
          />
          <Route path="/signupOrg" exact element={<SignupOrg />} />
          <Route path="/signup" exact element={<SignUpChoice />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/userProfile" exact element={<UserProfile />} />
          <Route path="/resetPassword" exact element={<ResetPassword />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
          <Route path="/donateMedicine" exact element={<MedicineForm />} />
          <Route
            path="/medicineDashboard"
            exact
            element={<MedicineDashboard />}
          />
        </Routes>
        <Footer />
        {/* <ProfilePage/> */}
      </Router>
      {/* <Hero />
      <About />
      <Contact /> */}
      {/* <Login /> */}
      {/* <SignupUser /> */}
      {/* <SignupOrg /> */}
    </>
  );
}
