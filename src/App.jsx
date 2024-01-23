import Fotter from "./components/Fotter";
import Navbar from "./components/Navbar";
import HOMEWORKHELP from "./pages/HomeWorkHelp";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Chatbot from "./pages/Chatbot";
import GeneralChatnot from "./pages/GeneralChatnot";

export default function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/HOMEWORK-HELP" element={<HOMEWORKHELP/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/gen-chatbot" element={<GeneralChatnot/>} />
      </Routes>
      <Fotter/>
   </>
  )
}