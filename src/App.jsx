import Fotter from "./components/Fotter";
import Navbar from "./components/Navbar";
import ChatBots from "./pages/ChatBots";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import LogIn from "./pages/LogIn";

export default function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chatbots" element={<ChatBots/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
      <Fotter/>
   </>
  )
}